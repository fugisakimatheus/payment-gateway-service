import { StatusError } from 'data/errors'
import { pedidoRepository } from 'data/repositories/pedido-repository'
import {
  GetPedidosParams,
  GetPedidosReturn,
  IGetPedidosUseCase,
} from 'domain/usecases/get-pedidos-usecase'

export class GetPedidosUseCase implements IGetPedidosUseCase {
  async handle(params: GetPedidosParams): Promise<GetPedidosReturn> {
    try {
      const { pagina = 1, por_pagina = 10 } = params

      const skip = por_pagina * (pagina - 1)
      const take = por_pagina

      const data = await pedidoRepository.findMany({
        skip,
        take,
        orderBy: {
          id: 'desc',
        },
        include: {
          acesso: { select: { id: true, nome: true, status: true } },
          metodo_pagamento: {
            select: { id: true, nome: true, tipo: true, status: true },
          },
        },
      })
      const total = await pedidoRepository.count()

      return { data, total }
    } catch (error) {
      StatusError.throw(error.message, 'INTERNAL')
    }
  }
}
