// ==========================================================================
// HIGH YA ! — Global State & Products Store
// ==========================================================================

import { formatPrice } from './currency';

export interface ProductVariant {
  id: string;
  name: string;
  slug: string;
  slogan: string;
  subtitle: string;
  description: string;
  flavorNotes: string[];
  nicotine: string;
  filterType: string;
  blendOrigin: string;
  priceXOF: number;       // Single pack price (20 cigs)
  cartonPriceXOF: number; // Carton price (10 packs = 200 cigs)
  badge: string;
  badgeType: 'super-admin' | 'vendeur' | 'vip' | 'wave' | 'public';
  themeColor: string;
  colorName: string;
  isVipExclusive?: boolean;
}

export const PRODUCTS: ProductVariant[] = [
  {
    id: 'bronze',
    name: 'HIGH YA ! Sauvage Bronze',
    slug: 'sauvage-bronze',
    slogan: 'ÉNERGIE SAUVAGE',
    subtitle: 'Bronze Brossé & Carbone Ébène',
    description: 'Une intensité brute née des terroirs sauvages. Flanc en carbone strié et dorure à chaud bronze. Un tirage riche aux arômes corsés et boisés relevés d’un bouquet végétal noble.',
    flavorNotes: ['Bois de santal', 'Tabac corsé affiné', 'Herbe sauvage sauvageonne', 'Épices chaudes'],
    nicotine: '0.8 mg',
    filterType: 'Filtre or métallisé & triple chambre à charbon actif',
    blendOrigin: 'Grand Cru Terroir d’Afrique de l’Ouest',
    priceXOF: 3500,
    cartonPriceXOF: 31500,
    badge: 'Best-Seller',
    badgeType: 'wave',
    themeColor: '#d89f38',
    colorName: 'Bronze Doré'
  },
  {
    id: 'cobalt',
    name: 'HIGH YA ! Cyber Cobalt',
    slug: 'cyber-cobalt',
    slogan: 'DYNAMIQUE & INTENSE',
    subtitle: 'Bleu Cobalt Néon & Chrome Liquide',
    description: 'La fraîcheur cybernétique à l’état pur. Texture texturée reptilienne bleu nuit avec gravures laser angulaires et liserés cyan luminescents. Fraîcheur mentholée givrée foudroyante.',
    flavorNotes: ['Menthol givré arctique', 'Terpènes botaniques purs', 'Zeste de yuzu vivifiant', 'Accents minéraux'],
    nicotine: '0.6 mg',
    filterType: 'Filtre bleu nuit texturé & anneau platine ventilé',
    blendOrigin: 'Assemblage Botanique Boréal & Herbes Sélect',
    priceXOF: 3800,
    cartonPriceXOF: 34200,
    badge: 'Nouveau',
    badgeType: 'vendeur',
    themeColor: '#00f0ff',
    colorName: 'Cobalt Électrique'
  },
  {
    id: 'emerald',
    name: 'HIGH YA ! Hexa Emerald',
    slug: 'hexa-emerald',
    slogan: 'ALCHIMIE BOTANIQUE',
    subtitle: 'Vert Alvéolé & Laiton Brossé',
    description: 'Structure géométrique nid d’abeille verte avec armature tactique boulonnée. Infusion subtile aux notes de thé vert matcha, d’eucalyptus sauvage et d’herbes rares.',
    flavorNotes: ['Feuilles de matcha broyées', 'Eucalyptus sauvage', 'Menthe douce poivrée', 'Infusion florale'],
    nicotine: '0.5 mg',
    filterType: 'Filtre émeraude marbré & liseré or brossé',
    blendOrigin: 'Sélection Organique & Feuille d’Or Végétale',
    priceXOF: 3600,
    cartonPriceXOF: 32400,
    badge: 'Organique',
    badgeType: 'vendeur',
    themeColor: '#00ff87',
    colorName: 'Émeraude Hexa'
  },
  {
    id: 'onyx',
    name: 'HIGH YA ! Obsidian Onyx VIP',
    slug: 'obsidian-onyx-vip',
    slogan: 'CLUB PRIVÉ ÉDITION LIMITÉE',
    subtitle: 'Noir Absolu & Dorure 24 Carats',
    description: 'Réservé exclusivement aux membres du Club VIP HIGH YA ! Boîtier d’ébène mat brossé avec feuille d’or 24K texturée et filtre en carbone pur. Arômes soyeux de vanille bourbon et de résine précieuse.',
    flavorNotes: ['Vanille bourbon de Madagascar', 'Résine ambrée', 'Tabac brun de garde', 'Notes toastées'],
    nicotine: '0.7 mg',
    filterType: 'Filtre carbone onyx & bague or gravée au laser',
    blendOrigin: 'Réserve Exclusive Privée (Tirage Limité)',
    priceXOF: 5000,
    cartonPriceXOF: 45000,
    badge: 'VIP Club',
    badgeType: 'vip',
    themeColor: '#ffd700',
    colorName: 'Onyx & Or 24K',
    isVipExclusive: true
  }
];

export interface CartItem {
  productId: string;
  format: 'pack' | 'carton'; // pack = 1 paquet (20 cigs), carton = 1 cartouche (10 paquets)
  quantity: number;
}

const CART_KEY = 'hy_shopping_cart';

export function getCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCart(items: CartItem[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent('hy:cart-updated', { detail: { items } }));
}

export function addToCart(productId: string, format: 'pack' | 'carton' = 'pack', quantity: number = 1): void {
  const current = getCart();
  const existingIdx = current.findIndex(i => i.productId === productId && i.format === format);
  if (existingIdx >= 0) {
    current[existingIdx].quantity += quantity;
  } else {
    current.push({ productId, format, quantity });
  }
  saveCart(current);
}

export function updateCartQuantity(productId: string, format: 'pack' | 'carton', quantity: number): void {
  let current = getCart();
  if (quantity <= 0) {
    current = current.filter(i => !(i.productId === productId && i.format === format));
  } else {
    const item = current.find(i => i.productId === productId && i.format === format);
    if (item) item.quantity = quantity;
  }
  saveCart(current);
}

export function clearCart(): void {
  saveCart([]);
}

export function calculateCartTotals(userRole: string = 'public') {
  const items = getCart();
  const isVip = userRole === 'vip' || userRole === 'super admin';

  let subtotal = 0;
  let totalItemsCount = 0;

  for (const item of items) {
    const product = PRODUCTS.find(p => p.id === item.productId);
    if (!product) continue;
    const unitPrice = item.format === 'carton' ? product.cartonPriceXOF : product.priceXOF;
    subtotal += unitPrice * item.quantity;
    totalItemsCount += item.quantity;
  }

  // VIP Club gets automatic 20% discount
  const discountRate = isVip ? 0.20 : 0.0;
  const discountAmount = Math.round(subtotal * discountRate);
  const total = subtotal - discountAmount;

  return {
    subtotal,
    discountAmount,
    isVip,
    total,
    totalItemsCount
  };
}
