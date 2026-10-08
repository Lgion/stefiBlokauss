// ==========================================================================
// HIGH YA ! — Checkout Funnel & Wave Payment Controller
// ==========================================================================

import QRCode from 'qrcode';
import confetti from 'canvas-confetti';
import { getCart, clearCart, calculateCartTotals, PRODUCTS } from './store';
import { formatPrice } from './currency';

export interface OrderData {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  paymentMethod: 'wave' | 'orange_money' | 'card' | 'cod';
  items: Array<{
    productId: string;
    productName: string;
    format: string;
    quantity: number;
    price: number;
  }>;
  totalXOF: number;
  status: 'Payé via Wave' | 'En attente' | 'Confirmé' | 'Expédié' | 'Livré';
  createdAt: string;
}

const ORDERS_KEY = 'hy_store_orders';

export function getStoredOrders(): OrderData[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(ORDERS_KEY);
    return raw ? JSON.parse(raw) : getInitialDemoOrders();
  } catch {
    return getInitialDemoOrders();
  }
}

export function saveOrder(order: OrderData): void {
  const current = getStoredOrders();
  current.unshift(order);
  localStorage.setItem(ORDERS_KEY, JSON.stringify(current));
  window.dispatchEvent(new CustomEvent('hy:order-created', { detail: { order } }));
}

export function updateOrderStatus(orderId: string, newStatus: OrderData['status']): void {
  const current = getStoredOrders();
  const order = current.find(o => o.id === orderId);
  if (order) {
    order.status = newStatus;
    localStorage.setItem(ORDERS_KEY, JSON.stringify(current));
    window.dispatchEvent(new CustomEvent('hy:orders-updated', { detail: { orders: current } }));
  }
}

function getInitialDemoOrders(): OrderData[] {
  return [
    {
      id: 'HY-8201',
      customerName: 'Cheikh Diop',
      phone: '+221 77 412 89 00',
      email: 'cheikh.diop@example.com',
      address: 'Almadies, Villa 42',
      city: 'Dakar',
      paymentMethod: 'wave',
      items: [
        { productId: 'bronze', productName: 'HIGH YA ! Sauvage Bronze', format: 'carton', quantity: 1, price: 31500 }
      ],
      totalXOF: 31500,
      status: 'Payé via Wave',
      createdAt: 'Aujourd’hui à 11:32'
    },
    {
      id: 'HY-8195',
      customerName: 'Aïssatou Koné',
      phone: '+225 07 88 12 43 90',
      email: 'aissatou.kone@example.com',
      address: 'Cocody Danga',
      city: 'Abidjan',
      paymentMethod: 'wave',
      items: [
        { productId: 'cobalt', productName: 'HIGH YA ! Cyber Cobalt', format: 'pack', quantity: 3, price: 11400 }
      ],
      totalXOF: 11400,
      status: 'Expédié',
      createdAt: 'Hier à 18:14'
    },
    {
      id: 'HY-8182',
      customerName: 'Marc Lefebvre (VIP)',
      phone: '+33 6 12 34 56 78',
      email: 'marc.lefebvre@example.com',
      address: '14 Rue Saint-Honoré',
      city: 'Paris',
      paymentMethod: 'card',
      items: [
        { productId: 'onyx', productName: 'HIGH YA ! Obsidian Onyx VIP', format: 'carton', quantity: 2, price: 72000 }
      ],
      totalXOF: 72000,
      status: 'Confirmé',
      createdAt: 'Il y a 2 jours'
    }
  ];
}

export async function generateWaveQRCode(phone: string, amount: number): Promise<string> {
  const waveDeepLink = `wave://pay?recipient=+221770000000&amount=${amount}&currency=XOF&memo=Commande_HIGH_YA`;
  try {
    return await QRCode.toDataURL(waveDeepLink, {
      margin: 1,
      color: {
        dark: '#003554',
        light: '#FFFFFF'
      },
      width: 256
    });
  } catch (err) {
    console.error('QR code generation error:', err);
    return '';
  }
}

export function triggerSuccessCelebration(): void {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#d89f38', '#00f0ff', '#00ff87', '#ffffff']
  });
}
