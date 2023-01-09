import { StatusErrorThrow } from 'data/errors'
import { GetMetodosPagamentoUseCase } from 'data/usecases/get-metodos-pagamento-usecase'
import { HttpStatus } from 'domain/enums'
import { GetMetodoPagamentosRequest } from 'domain/requests/metodo-pagamento'
import { GetMetodoPagamentosResponse } from 'domain/responses/metodo-pagamento'

export class GetMetodosPagamentoController {
  static async handle(
    request: GetMetodoPagamentosRequest,
    response: GetMetodoPagamentosResponse,
  ) {
    try {
      const getMetodosPagamentoUseCase = new GetMetodosPagamentoUseCase()
      const paginatedMetodosPagamento = await getMetodosPagamentoUseCase.handle(
        request.body,
      )
      return response.status(HttpStatus.OK).json(paginatedMetodosPagamento)
    } catch (error) {
      const typedError = error as StatusErrorThrow
      return response
        .status(typedError?.status || HttpStatus.BAD_REQUEST)
        .send({ error: typedError.message })
    }
  }
}
