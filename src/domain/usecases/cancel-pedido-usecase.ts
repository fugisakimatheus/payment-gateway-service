import { Pedido } from '@prisma/client'

export interface ICancelPedidoUseCase {
  handle(id: number): Promise<Pedido>
}
