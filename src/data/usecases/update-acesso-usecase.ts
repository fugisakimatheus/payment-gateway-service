import { Acesso } from '@prisma/client'
import bcrypt from 'bcrypt'
import { StatusError } from 'data/errors'
import { acessoRepository } from 'data/repositories/acesso-repository'
import {
  UpdateAcessoParams,
  IUpdateAcessoUseCase,
} from 'domain/usecases/update-acesso-usecase'

export class UpdateAcessoUseCase implements IUpdateAcessoUseCase {
  async handle(params: UpdateAcessoParams): Promise<Acesso> {
    try {
      const { id, ...data } = params
      if (data.access_key) {
        data.access_key = await bcrypt.hash(data.access_key as string, 32)
      }
      const acesso = await acessoRepository.update(id, data)
      acesso.access_key = undefined
      return acesso
    } catch (error) {
      StatusError.throw(error.message, 'INTERNAL')
    }
  }
}
