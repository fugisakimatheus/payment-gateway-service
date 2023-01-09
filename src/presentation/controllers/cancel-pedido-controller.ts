import { StatusErrorThrow } from 'data/errors'
import { CancelPedidoUseCase } from 'data/usecases/cancel-pedido-usecase'
import { HttpStatus } from 'domain/enums'
import { CancelPedidoRequest } from 'domain/requests/pedido'
import { CancelPedidoResponse } from 'domain/responses/pedido'

export class CancelPedidoController {
  static async handle(
    request: CancelPedidoRequest,
    response: CancelPedidoResponse,
  ) {
    try {
      const cancelPedidoUseCase = new CancelPedidoUseCase()
      const pedido = await cancelPedidoUseCase.handle(request.params.id)
      return response.status(HttpStatus.OK).json(pedido)
    } catch (error) {
      const typedError = error as StatusErrorThrow
      return response
        .status(typedError?.status || HttpStatus.BAD_REQUEST)
        .send({ error: typedError.message })
    }
  }
}
