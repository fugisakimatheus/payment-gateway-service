import express from 'express'
import routes from 'presentation/routes'
import { loadEnvironment } from 'utils/env'

loadEnvironment()

const port = process.env.APP_PORT
const app = express()

app.use(express.json())
app.use(routes)

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server is running on PORT ${port}`))
