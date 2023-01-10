import { Acesso } from '@prisma/client'
import bcrypt from 'bcrypt'
import { StatusError } from 'data/errors'
import { acessoRepository } from 'data/repositories/acesso-repository'
import {
  CreateAcessoParams,
  ICreateAcessoUseCase,
} from 'domain/usecases/create-acesso-usecase'

export class CreateAcessoUseCase implements ICreateAcessoUseCase {
  async handle(params: CreateAcessoParams): Promise<Acesso> {
    try {
      const chaveAcessoCriptografada = await bcrypt.hash(params.access_key, 16)
      const acesso = await acessoRepository.create({
        ...params,
        access_key: chaveAcessoCriptografada,
      })
      acesso.access_key = undefined
      return acesso
    } catch (error) {
      StatusError.throw(error.message, 'INTERNAL')
    }
  }
}
