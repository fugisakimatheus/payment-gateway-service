import { Pedido } from '@prisma/client'
import { StatusError } from 'data/errors'
import { pedidoRepository } from 'data/repositories/pedido-repository'
import { PedidoStatus } from 'domain/enums'
import {
  CreatePedidoParams,
  ICreatePedidoUseCase,
} from 'domain/usecases/create-pedido-usecase'

export class CreatePedidoUseCase implements ICreatePedidoUseCase {
  async handle(params: CreatePedidoParams): Promise<Pedido> {
    try {
      const pedido = await pedidoRepository.create({
        id_acesso: params.id_acesso,
        id_metodo_pagamento: 1,
        total: params.total,
        status: PedidoStatus.AGUARDANDO_PAGAMENTO,
      })

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
