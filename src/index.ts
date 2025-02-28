import { app } from './app'
import { PORT } from './config'
import { CURRENCY_ERROR } from './errors'
import { PYDOLARVE } from './services/pydolarve'
import { type Currency, CURRENCY } from './types/currency'
import { isCurrency } from './utils/isCurrency'

app.get('/:currency', async (req, res) => {
  const currency = req.params.currency as Currency

  if (!isCurrency(currency)) {
    res.status(400).json(CURRENCY_ERROR(currency))
    return
  }

  res.json((await PYDOLARVE.getMonitorsInfo(currency)).monitorsInfo)
  return
})

app.listen(PORT, () => console.log(`server on port: http://localhost:${PORT}`))
