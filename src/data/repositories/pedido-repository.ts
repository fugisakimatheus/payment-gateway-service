import { Pedido, Prisma } from '@prisma/client'
import { BaseRepository } from 'data/repositories/base-repository'
import { prisma } from 'infra/database/prisma'

export class PedidoRepository extends BaseRepository<
  Pedido,
  Prisma.PedidoDelegate<Prisma.RejectOnNotFound>,
  Prisma.PedidoUncheckedCreateInput,
  Prisma.PedidoUpdateInput,
  Prisma.PedidoFindManyArgs,
  Prisma.PedidoFindFirstArgs,
  Prisma.PedidoCountArgs
> {
  constructor() {
    super(prisma.pedido)
  }
}

export const pedidoRepository = new PedidoRepository()
