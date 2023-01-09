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
    const access_key = request.headers.accesskey as string

    if (!access_key) {
      StatusError.throw('Informe a chave de acesso', 'BAD_REQUEST')
      return
    }

    const acesso = await acessoRepository.findFirst({ where: { access_key } })

    if (!acesso) {
      StatusError.throw('Acesso não encontrado', 'NOT_FOUND')
      return
    }

    request.id_acesso = acesso.id

    return next()
  }
}
