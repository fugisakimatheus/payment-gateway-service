import { StatusErrorThrow } from 'data/errors'
import { UpdateMetodoPagamentoUseCase } from 'data/usecases/update-metodo-pagamento-usecase'
import { HttpStatus } from 'domain/enums'
import { UpdateMetodoPagamentoRequest } from 'domain/requests/metodo-pagamento'
import { UpdateMetodoPagamentoResponse } from 'domain/responses/metodo-pagamento'

export class UpdateMetodoPagamentoController {
  static async handle(
    request: UpdateMetodoPagamentoRequest,
    response: UpdateMetodoPagamentoResponse,
  ) {
    try {
      const updateMetodoPagamentoUseCase = new UpdateMetodoPagamentoUseCase()
      const metodoPagamento = await updateMetodoPagamentoUseCase.handle(
        request.body,
      )
      return response.status(HttpStatus.OK).json(metodoPagamento)
    } catch (error) {
      const typedError = error as StatusErrorThrow
      return response
        .status(typedError?.status || HttpStatus.BAD_REQUEST)
        .send({ error: typedError.message })
    }
  }
}
