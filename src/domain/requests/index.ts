import { Request } from 'express'

export type BaseRequestBody<T = any> = Request<any, any, T> & {
  id_acesso?: number
}

export type BaseRequestParams<T = any> = Request<T, any, any> & {
  id_acesso?: number
}

export type BaseRequestBodyAndParams<B = any, P = any> = Request<P, any, B> & {
  id_acesso?: number
}
