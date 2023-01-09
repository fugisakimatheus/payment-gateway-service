import { Response } from 'express'

export type BaseResponse<T = any> = Response<T | { error: any }>

export type DeleteResponse = BaseResponse<{ id: number }>
