import { Currency, CURRENCY } from '../types/currency'

export const isCurrency = (currency: string) =>
  Object.entries(CURRENCY)
    .map(([_, value]) => value.name)
    .includes(currency as Currency)
