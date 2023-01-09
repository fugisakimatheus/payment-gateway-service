import { MetodoPagamento } from '@prisma/client'
import { StatusError } from 'data/errors'
import { metodoPagamentoRepository } from 'data/repositories/metodo-pagamento-repository'
import {
  IUpdateMetodoPagamentoUseCase,
  UpdateMetodoPagamentoParams,
} from 'domain/usecases/update-metodo-pagamento-usecase'

export class UpdateMetodoPagamentoUseCase
  implements IUpdateMetodoPagamentoUseCase
{
  async handle(params: UpdateMetodoPagamentoParams): Promise<MetodoPagamento> {
    try {
      const { id, ...data } = params
      const categoria = await metodoPagamentoRepository.update(id, data)
      return categoria
    } catch (error) {
      StatusError.throw(error.message, 'INTERNAL')
    }
  }
}
