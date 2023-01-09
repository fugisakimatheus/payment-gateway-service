import { CreateMetodoPagamentoParams } from 'domain/usecases/create-metodo-pagamento-usecase'
import { GetMetodosPagamentoParams } from 'domain/usecases/get-metodos-pagamento-usecase'
import { UpdateMetodoPagamentoParams } from 'domain/usecases/update-metodo-pagamento-usecase'

import { BaseRequestBody, BaseRequestParams } from '.'

export type GetMetodoPagamentosRequest =
  BaseRequestBody<GetMetodosPagamentoParams>

export type CreateMetodoPagamentoRequest =
  BaseRequestBody<CreateMetodoPagamentoParams>

export type UpdateMetodoPagamentoRequest =
  BaseRequestBody<UpdateMetodoPagamentoParams>

export type DeleteMetodoPagamentoRequest = BaseRequestParams<{ id: number }>
