import cors from 'cors'
import express from 'express'
import routes from 'presentation/routes'
import { loadEnvironment } from 'utils/env'

loadEnvironment()

const port = process.env.APP_PORT
const app = express()

app.use(cors())
app.use(express.json({ limit: '100kb' }))
app.use(routes)

const server = app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log(`Server is running on PORT ${port}`),
)

server.setTimeout(120000)
