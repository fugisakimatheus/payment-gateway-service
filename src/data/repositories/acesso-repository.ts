import { Prisma, Acesso } from '@prisma/client'
import { BaseRepository } from 'data/repositories/base-repository'
import { prisma } from 'infra/database/prisma'

export class AcessoRepository extends BaseRepository<
  Acesso,
  Prisma.AcessoDelegate<Prisma.RejectOnNotFound>,
  Prisma.AcessoUncheckedCreateInput,
  Prisma.AcessoUpdateInput,
  Prisma.AcessoFindManyArgs,
  Prisma.AcessoFindFirstArgs,
  Prisma.AcessoCountArgs
> {
  constructor() {
    super(prisma.acesso)
  }
}

export const acessoRepository = new AcessoRepository()
