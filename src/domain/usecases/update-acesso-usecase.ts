import { Prisma, Acesso } from '@prisma/client'

export type UpdateAcessoParams = Prisma.AcessoUncheckedUpdateInput & {
  id?: number
}

export interface IUpdateAcessoUseCase {
  handle(params: UpdateAcessoParams): Promise<Acesso>
}
