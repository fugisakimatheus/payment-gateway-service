import { Pedido } from '@prisma/client'
import { StatusError } from 'data/errors'
import { pedidoRepository } from 'data/repositories/pedido-repository'
import {
  UpdatePedidoParams,
  IUpdatePedidoUseCase,
} from 'domain/usecases/update-pedido-usecase'

export class UpdatePedidoUseCase implements IUpdatePedidoUseCase {
  async handle(params: UpdatePedidoParams): Promise<Pedido> {
    try {
      const { id, ...data } = params

      const pedido = await pedidoRepository.update(id, data)

      const fullPedido = await pedidoRepository.findFirst({
        where: { id: pedido.id },
        include: {
          acesso: {
            select: { id: true, nome: true, status: true },
          },
          metodo_pagamento: {
            select: { id: true, nome: true, tipo: true, status: true },
          },
        },
      })

      return fullPedido
    } catch (error) {
      StatusError.throw(error.message, 'INTERNAL')
    }
  }
}
