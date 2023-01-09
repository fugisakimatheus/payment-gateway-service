import { StatusErrorThrow } from 'data/errors'
import { GetPedidosUseCase } from 'data/usecases/get-pedidos-usecase'
import { HttpStatus } from 'domain/enums'
import { GetPedidosRequest } from 'domain/requests/pedido'
import { GetPedidosResponse } from 'domain/responses/pedido'

export class GetPedidosController {
  static async handle(
    request: GetPedidosRequest,
    response: GetPedidosResponse,
  ) {
    try {
      const getPedidosUseCase = new GetPedidosUseCase()
      const paginatedPedidos = await getPedidosUseCase.handle(request.body)
      return response.status(HttpStatus.OK).json(paginatedPedidos)
    } catch (error) {
      const typedError = error as StatusErrorThrow
      return response
        .status(typedError?.status || HttpStatus.BAD_REQUEST)
        .send({ error: typedError.message })
    }
  }
}
