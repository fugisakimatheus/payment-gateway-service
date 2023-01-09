import { config } from 'dotenv'

const isDev = process.env.NODE_ENV === 'dev'

export const loadEnvironment = () => {
  config({ path: `.env${isDev ? '' : process.env.NODE_ENV}` })
}
