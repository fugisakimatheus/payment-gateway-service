import { StatusErrorThrow } from 'data/errors'
import { CreatePedidoUseCase } from 'data/usecases/create-pedido-usecase'
import { HttpStatus } from 'domain/enums'
import { CreatePedidoRequest } from 'domain/requests/pedido'
import { CreatePedidoResponse } from 'domain/responses/pedido'

export class CreatePedidoController {
  static async handle(
    request: CreatePedidoRequest,
    response: CreatePedidoResponse,
  ) {
    try {
      const createPedidoUseCase = new CreatePedidoUseCase()
      const pedido = await createPedidoUseCase.handle({
        ...request.body,
        id_acesso: request.id_acesso,
      })
      return response.status(HttpStatus.OK).json(pedido)
    } catch (error) {
      const typedError = error as StatusErrorThrow
      return response
        .status(typedError?.status || HttpStatus.BAD_REQUEST)
        .send({ error: typedError.message })
    }
  }
}
