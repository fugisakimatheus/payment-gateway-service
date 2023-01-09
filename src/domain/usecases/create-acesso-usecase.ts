import { Prisma, Acesso } from '@prisma/client'

export type CreateAcessoParams = Prisma.AcessoUncheckedCreateInput

export interface ICreateAcessoUseCase {
  handle(params: CreateAcessoParams): Promise<Acesso>
}
