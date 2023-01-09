import { StatusErrorThrow } from 'data/errors'
import { CreateMetodoPagamentoUseCase } from 'data/usecases/create-metodo-pagamento-usecase'
import { HttpStatus } from 'domain/enums'
import { CreateMetodoPagamentoRequest } from 'domain/requests/metodo-pagamento'
import { CreateMetodoPagamentoResponse } from 'domain/responses/metodo-pagamento'

export class CreateMetodoPagamentoController {
  static async handle(
    request: CreateMetodoPagamentoRequest,
    response: CreateMetodoPagamentoResponse,
  ) {
    try {
      const createMetodoPagamentoUseCase = new CreateMetodoPagamentoUseCase()
      const metodoPagamento = await createMetodoPagamentoUseCase.handle(
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
