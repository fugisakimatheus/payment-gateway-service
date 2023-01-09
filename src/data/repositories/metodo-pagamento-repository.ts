import { MetodoPagamento, Prisma } from '@prisma/client'
import { BaseRepository } from 'data/repositories/base-repository'
import { prisma } from 'infra/database/prisma'

export class MetodoPagamentoRepository extends BaseRepository<
  MetodoPagamento,
  Prisma.MetodoPagamentoDelegate<Prisma.RejectOnNotFound>,
  Prisma.MetodoPagamentoUncheckedCreateInput,
  Prisma.MetodoPagamentoUpdateInput,
  Prisma.MetodoPagamentoFindManyArgs,
  Prisma.MetodoPagamentoFindFirstArgs,
  Prisma.MetodoPagamentoCountArgs
> {
  constructor() {
    super(prisma.metodoPagamento)
  }
}

export const metodoPagamentoRepository = new MetodoPagamentoRepository()
