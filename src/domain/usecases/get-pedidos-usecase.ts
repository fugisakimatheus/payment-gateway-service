import { Pedido } from '@prisma/client'
import { PaginatedReturnData, PaginatedParams } from 'domain/common'

export type GetPedidosParams = PaginatedParams

export type GetPedidosReturn = PaginatedReturnData<Pedido>

export interface IGetPedidosUseCase {
  handle(params: GetPedidosParams): Promise<GetPedidosReturn>
}
