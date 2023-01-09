import { StatusError } from 'data/errors'
import { metodoPagamentoRepository } from 'data/repositories/metodo-pagamento-repository'
import {
  GetMetodosPagamentoParams,
  GetMetodosPagamentoReturn,
  IGetMetodosPagamentoUseCase,
} from 'domain/usecases/get-metodos-pagamento-usecase'

export class GetMetodosPagamentoUseCase implements IGetMetodosPagamentoUseCase {
  async handle(
    params: GetMetodosPagamentoParams,
  ): Promise<GetMetodosPagamentoReturn> {
    try {
      const { pagina = 1, por_pagina = 10 } = params

      const skip = por_pagina * (pagina - 1)
      const take = por_pagina

      const data = await metodoPagamentoRepository.findMany({
        skip,
        take,
        orderBy: {
          id: 'desc',
        },
      })
      const total = await metodoPagamentoRepository.count()

      return { data, total }
    } catch (error) {
      StatusError.throw(error.message, 'INTERNAL')
    }
  }
}
