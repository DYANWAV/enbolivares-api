import { MonitorsInfo } from '../types/monitors'
import { Currency } from '../types/currency'
import { formatMonitors } from '../utils/formatMonitors'
import { PYDOLARVE_URL } from '../config'

export class PYDOLARVE {
  static URL = PYDOLARVE_URL

  static getMonitorsInfo = async (currency: Currency) => {
    const res = await fetch(`${this.URL}/${currency}`)
    const monitors = (await res.json()) as MonitorsInfo
    return formatMonitors(monitors)
  }
}
