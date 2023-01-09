import { acessoRepository } from 'data/repositories/acesso-repository'
import { HttpStatus } from 'domain/enums'
import { CreateAcessoRequest } from 'domain/requests/acesso'
import { CreateAcessoResponse } from 'domain/responses/acesso'
import { NextFunction } from 'express'

export class CreateAcessoValidator {
  static async handle(
    request: CreateAcessoRequest,
    response: CreateAcessoResponse,
    next: NextFunction,
  ) {
    const params = request.body

    if (!params.access_key) {
      return response.status(HttpStatus.BAD_REQUEST).send({
        error: 'Informe uma chave de acesso',
      })
    }

    const acessoAccessKey = await acessoRepository.findFirst({
      where: { access_key: params.access_key },
    })

    if (acessoAccessKey) {
      return response.status(HttpStatus.BAD_REQUEST).send({
        error: 'Chave de acesso indisponível',
      })
    }

    if (!params.login) {
      next()
      return
    }

    const acessoLogin = await acessoRepository.findFirst({
      where: { login: params.login },
    })

    if (acessoLogin) {
      return response.status(HttpStatus.BAD_REQUEST).send({
        error: 'Esse login ja está sendo usado',
      })
    }

    next()
  }
}
