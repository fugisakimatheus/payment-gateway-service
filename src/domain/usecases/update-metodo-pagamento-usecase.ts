import { Prisma, MetodoPagamento } from '@prisma/client'

export type UpdateMetodoPagamentoParams =
  Prisma.MetodoPagamentoUncheckedUpdateInput & {
    id?: number
  }

export interface IUpdateMetodoPagamentoUseCase {
  handle(params: UpdateMetodoPagamentoParams): Promise<MetodoPagamento>
}
