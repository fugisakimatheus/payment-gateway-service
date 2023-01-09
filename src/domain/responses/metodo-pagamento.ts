import { MetodoPagamento } from '@prisma/client'
import { GetMetodosPagamentoReturn } from 'domain/usecases/get-metodos-pagamento-usecase'

import { BaseResponse, DeleteResponse } from '.'

export type GetMetodoPagamentosResponse =
  BaseResponse<GetMetodosPagamentoReturn>

export type CreateMetodoPagamentoResponse = BaseResponse<MetodoPagamento>

export type UpdateMetodoPagamentoResponse = BaseResponse<MetodoPagamento>

export type DeleteMetodoPagamentoResponse = DeleteResponse
