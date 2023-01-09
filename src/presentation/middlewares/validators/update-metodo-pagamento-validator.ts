import { HttpStatus } from 'domain/enums'
import { UpdateMetodoPagamentoRequest } from 'domain/requests/metodo-pagamento'
import { UpdateMetodoPagamentoResponse } from 'domain/responses/metodo-pagamento'
import { NextFunction } from 'express'

export class UpdateMetodoPagamentoValidator {
  static async handle(
    request: UpdateMetodoPagamentoRequest,
    response: UpdateMetodoPagamentoResponse,
    next: NextFunction,
  ) {
    const params = request.body

    if (!params.id) {
      return response.status(HttpStatus.BAD_REQUEST).send({
        error: 'Id do método de pagamento não informado',
      })
    }

    next()
  }
}
