import { Pedido } from '@prisma/client'
import { StatusError } from 'data/errors'
import { pedidoRepository } from 'data/repositories/pedido-repository'
import { PedidoStatus } from 'domain/enums'
import { ICancelPedidoUseCase } from 'domain/usecases/cancel-pedido-usecase'

export class CancelPedidoUseCase implements ICancelPedidoUseCase {
  async handle(id: number): Promise<Pedido> {
    try {
      const pedido = await pedidoRepository.update(id, {
        status: PedidoStatus.CANCELADO,
      })
      return pedido
    } catch (error) {
      StatusError.throw(error.message, 'INTERNAL')
    }
  }
}
