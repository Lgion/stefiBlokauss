// ==========================================================================
// HIGH YA ! — Currency Management System
// Default: XOF (FCFA), fully configurable in Super Admin
// ==========================================================================

export type SupportedCurrency = 'XOF' | 'EUR' | 'USD';

export interface CurrencyConfig {
  code: SupportedCurrency;
  symbol: string;
  name: string;
  rateAgainstXOF: number; // 1 Currency = X XOF
  symbolPosition: 'before' | 'after';
}

export const CURRENCY_CONFIGS: Record<SupportedCurrency, CurrencyConfig> = {
  XOF: {
    code: 'XOF',
    symbol: 'FCFA',
    name: 'Franc CFA (XOF)',
    rateAgainstXOF: 1,
    symbolPosition: 'after'
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    name: 'Euro (€)',
    rateAgainstXOF: 655.957,
    symbolPosition: 'after'
  },
  USD: {
    code: 'USD',
    symbol: '$',
    name: 'Dollar US ($)',
    rateAgainstXOF: 600.0,
    symbolPosition: 'before'
  }
};

const STORAGE_KEY = 'hy_store_currency';

export function getActiveCurrency(): SupportedCurrency {
  if (typeof window === 'undefined') return 'XOF';
  const saved = localStorage.getItem(STORAGE_KEY) as SupportedCurrency;
  return saved && CURRENCY_CONFIGS[saved] ? saved : 'XOF';
}

export function setActiveCurrency(code: SupportedCurrency): void {
  if (typeof window === 'undefined') return;
  if (CURRENCY_CONFIGS[code]) {
    localStorage.setItem(STORAGE_KEY, code);
    window.dispatchEvent(new CustomEvent('hy:currency-changed', { detail: { currency: code } }));
  }
}

export function formatPrice(amountInXOF: number, targetCurrency?: SupportedCurrency): string {
  const code = targetCurrency || (typeof window !== 'undefined' ? getActiveCurrency() : 'XOF');
  const config = CURRENCY_CONFIGS[code] || CURRENCY_CONFIGS.XOF;

  let convertedValue = amountInXOF;
  if (code !== 'XOF') {
    convertedValue = amountInXOF / config.rateAgainstXOF;
  }

  // Formatting
  const formattedNumber = new Intl.NumberFormat('fr-FR', {
    maximumFractionDigits: code === 'XOF' ? 0 : 2,
    minimumFractionDigits: code === 'XOF' ? 0 : 2
  }).format(convertedValue);

  return config.symbolPosition === 'before'
    ? `${config.symbol}${formattedNumber}`
    : `${formattedNumber} ${config.symbol}`;
}
