import { MONITOR } from '../consts'

export interface MonitorsInfo {
  datetime: Datetime
  monitors: Monitors
}

export interface FormattedMonitorsInfo {
  datetime: Datetime
  monitors: FormattedMonitors
}

export type Monitors = Partial<Record<MonitorsNames, Monitor>>
export type FormattedMonitors = Record<MonitorsNames, FormattedMonitor>

export interface Datetime {
  date: string
  time: string
}

export interface Monitor {
  change: number
  color: Color
  image: null | string
  last_update: string
  percent: number
  price: number
  price_old: number
  symbol: Symbol
  title: string
}

export type FormattedMonitor = {
  color: Color
  image: null | string
  last_update: string
  percent: number
  price: number
  old_price: number
  title: MonitorsTitles
}

export enum Color {
  Green = 'green',
  Neutral = 'neutral',
  Red = 'red',
}

export enum Symbol {
  Empty = '▲',
  Purple = '',
  Symbol = '▼',
}

export type MonitorsNames = keyof typeof MONITOR
export type MonitorsTitles = (typeof MONITOR)[keyof typeof MONITOR]['title']

export type MonitorsList = Record<
  MonitorsNames,
  { name: MonitorsNames; title: MonitorsTitles }
>
