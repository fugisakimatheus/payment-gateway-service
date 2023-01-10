import bcrypt from 'bcrypt'
import { StatusError } from 'data/errors'
import { acessoRepository } from 'data/repositories/acesso-repository'
import { BaseRequestBody } from 'domain/requests'
import { NextFunction, Response } from 'express'

export class AutenticationAccessKeyValidator {
  static async handle(
    request: BaseRequestBody,
    _response: Response,
    next: NextFunction,
  ) {
    const login = request.headers.login as string
    const access_key = request.headers.accesskey as string

    if (!access_key) {
      StatusError.throw('Informe a chave de acesso', 'BAD_REQUEST')
      return
    }

    const acesso = await acessoRepository.findFirst({ where: { login } })

    if (!acesso) {
      StatusError.throw('Acesso não encontrado', 'NOT_FOUND')
      return
    }

    const isValidAcessKey = await bcrypt.compare(access_key, acesso.access_key)

    if (!isValidAcessKey) {
      StatusError.throw('Chave de acesso inválida inválida', 'BAD_REQUEST')
      return
    }

    request.id_acesso = acesso.id

    return next()
  }
}
