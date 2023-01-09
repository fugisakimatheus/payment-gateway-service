import { StatusErrorThrow } from 'data/errors'
import { UpdatePedidoUseCase } from 'data/usecases/update-pedido-usecase'
import { HttpStatus } from 'domain/enums'
import { UpdatePedidoRequest } from 'domain/requests/pedido'
import { UpdatePedidoResponse } from 'domain/responses/pedido'

export class UpdatePedidoController {
  static async handle(
    request: UpdatePedidoRequest,
    response: UpdatePedidoResponse,
  ) {
    try {
      const updatePedidoUseCase = new UpdatePedidoUseCase()
      const pedido = await updatePedidoUseCase.handle(request.body)
      return response.status(HttpStatus.OK).json(pedido)
    } catch (error) {
      const typedError = error as StatusErrorThrow
      return response
        .status(typedError?.status || HttpStatus.BAD_REQUEST)
        .send({ error: typedError.message })
    }
  }
}
