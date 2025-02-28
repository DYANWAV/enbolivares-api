export const CURRENCY = {
  dollar: {
    name: 'dollar',
    Title: 'USD',
    symbol: '$',
  },
  euro: {
    name: 'euro',
    Title: 'EUR',
    symbol: '€',
  },
} as const

export type Currency = keyof typeof CURRENCY
