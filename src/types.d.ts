export {}

declare global {
  declare namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'dev' | 'production' | 'staging' | 'test'
      APP_PORT: number
      DATABASE_URL: string
    }
  }
}
