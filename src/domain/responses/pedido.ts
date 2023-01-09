import { Pedido } from '@prisma/client'
import { GetPedidosReturn } from 'domain/usecases/get-pedidos-usecase'

import { BaseResponse } from '.'

export type GetPedidosResponse = BaseResponse<GetPedidosReturn>

export type CreatePedidoResponse = BaseResponse<Pedido>

export type UpdatePedidoResponse = BaseResponse<Pedido>

export type CancelPedidoResponse = BaseResponse<Pedido>
