import { Prisma, MetodoPagamento } from '@prisma/client'

export type CreateMetodoPagamentoParams =
  Prisma.MetodoPagamentoUncheckedCreateInput

export interface ICreateMetodoPagamentoUseCase {
  handle(params: CreateMetodoPagamentoParams): Promise<MetodoPagamento>
}
