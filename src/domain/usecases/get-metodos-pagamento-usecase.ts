import { MetodoPagamento } from '@prisma/client'
import { PaginatedReturnData, PaginatedParams } from 'domain/common'

export type GetMetodosPagamentoParams = PaginatedParams

export type GetMetodosPagamentoReturn = PaginatedReturnData<MetodoPagamento>

export interface IGetMetodosPagamentoUseCase {
  handle(params: GetMetodosPagamentoParams): Promise<GetMetodosPagamentoReturn>
}
