import { CreatePedidoParams } from 'domain/usecases/create-pedido-usecase'
import { GetPedidosParams } from 'domain/usecases/get-pedidos-usecase'
import { UpdatePedidoParams } from 'domain/usecases/update-pedido-usecase'

import { BaseRequestBody, BaseRequestParams } from '.'

export type GetPedidosRequest = BaseRequestBody<GetPedidosParams>

export type CreatePedidoRequest = BaseRequestBody<CreatePedidoParams>

export type UpdatePedidoRequest = BaseRequestBody<UpdatePedidoParams>

export type CancelPedidoRequest = BaseRequestParams<{ id: number }>
