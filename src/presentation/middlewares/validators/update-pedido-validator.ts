import { pedidoRepository } from 'data/repositories/pedido-repository'
import { HttpStatus, PedidoStatus } from 'domain/enums'
import { UpdatePedidoRequest } from 'domain/requests/pedido'
import { UpdatePedidoResponse } from 'domain/responses/pedido'
import { NextFunction } from 'express'

const status = [
  PedidoStatus.AGUARDANDO_PAGAMENTO,
  PedidoStatus.CANCELADO,
  PedidoStatus.ESTORNADO,
  PedidoStatus.FINALIZADO,
]

export class UpdatePedidoValidator {
  static async handle(
    request: UpdatePedidoRequest,
    response: UpdatePedidoResponse,
    next: NextFunction,
  ) {
    const params = request.body

    if (!params.id) {
      return response.status(HttpStatus.BAD_REQUEST).send({
        error: 'Id do pedido não informado',
      })
    }

    const pedido = await pedidoRepository.findFirst({
      where: { id: params.id, arquivado: false },
    })

    if (!pedido) {
      return response.status(HttpStatus.NOT_FOUND).send({
        error: 'Pedido não encontrado',
      })
    }

    if (params.status && !status.includes(params.status as any)) {
      return response.status(HttpStatus.NOT_FOUND).send({
        error: 'Status inválido',
      })
    }

    next()
  }
}
