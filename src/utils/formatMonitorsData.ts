import { MONITORS_TITLES } from '../consts'
import {
  FormattedMonitors,
  Monitors,
  MonitorsInfo,
  MonitorsList,
  MonitorsNames,
  MonitorsTitles,
} from '../types/monitors'

export const formatMonitorsData = (monitorsData: MonitorsInfo) => {
  const { monitors } = monitorsData

  const formatted = {} as FormattedMonitors
  const monitors_list = {} as MonitorsList

  Object.entries(monitors).forEach(([key, value]) => {
    const { monitorKey, monitorTitle } = formatMonitorTitle(
      key as MonitorsNames,
      value.title as MonitorsTitles
    )

    formatted[monitorKey] = {
      color: value.color,
      image: value.image,
      last_update: value.last_update,
      percent: value.percent,
      price: value.price,
      old_price: value.price_old,
      title: monitorTitle,
    }

    monitors_list[monitorKey] = { name: monitorKey, title: monitorTitle }
  })

  return {
    monitors_list,
    monitors: formatted,
  }
}

function formatMonitorTitle(
  monitorKey: MonitorsNames,
  monitorTitle: MonitorsTitles
) {
  if (monitorTitle === ('Dólar estadounidense' as MonitorsTitles))
    monitorTitle = MONITORS_TITLES.bcv as MonitorsTitles

  if (monitorTitle === ('EnParaleloVzla' as MonitorsTitles)) {
    monitorTitle = MONITORS_TITLES.paralelo as MonitorsTitles
    monitorKey = 'paralelo'
  }

  return {
    monitorKey,
    monitorTitle,
  }
}
