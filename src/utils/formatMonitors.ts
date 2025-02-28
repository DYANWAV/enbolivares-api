import { MONITOR } from '../consts'
import {
  FormattedMonitorsInfo,
  FormattedMonitors,
  MonitorsInfo,
  MonitorsTitles,
  MonitorsNames,
} from '../types/monitors'

export const formatMonitors = (monitors: MonitorsInfo) => {
  let monitorsMap = {} as FormattedMonitors

  Object.entries(monitors.monitors).map(([key, value]) => {
    if (key === 'enparalelovzla') key = MONITOR.paralelo.name
    if (value.title === 'Dólar estadounidense') value.title = MONITOR.bcv.title
    if (value.title === 'EnParaleloVzla') value.title = MONITOR.paralelo.title

    monitorsMap[key as MonitorsNames] = {
      color: value.color,
      image: value.image,
      last_update: value.last_update,
      percent: value.percent,
      price: value.price,
      old_price: value.price_old,
      title: value.title as MonitorsTitles,
    }
  })

  let monitorsInfoMap: FormattedMonitorsInfo = {
    datetime: monitors.datetime,
    monitors: monitorsMap,
  }

  return { monitorsInfo: monitorsInfoMap }
}
