import { MetodoPagamento } from '@prisma/client'
import { StatusError } from 'data/errors'
import { metodoPagamentoRepository } from 'data/repositories/metodo-pagamento-repository'
import {
  CreateMetodoPagamentoParams,
  ICreateMetodoPagamentoUseCase,
} from 'domain/usecases/create-metodo-pagamento-usecase'

export class CreateMetodoPagamentoUseCase
  implements ICreateMetodoPagamentoUseCase
{
  async handle(params: CreateMetodoPagamentoParams): Promise<MetodoPagamento> {
    try {
      const matodoPagamento = await metodoPagamentoRepository.create(params)
      return matodoPagamento
    } catch (error) {
      StatusError.throw(error.message, 'INTERNAL')
    }
  }
}
