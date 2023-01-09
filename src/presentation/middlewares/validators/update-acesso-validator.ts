import { acessoRepository } from 'data/repositories/acesso-repository'
import { HttpStatus } from 'domain/enums'
import { UpdateAcessoRequest } from 'domain/requests/acesso'
import { UpdateAcessoResponse } from 'domain/responses/acesso'
import { NextFunction } from 'express'

export class UpdateAcessoValidator {
  static async handle(
    request: UpdateAcessoRequest,
    response: UpdateAcessoResponse,
    next: NextFunction,
  ) {
    const params = request.body

    if (!params.id) {
      return response.status(HttpStatus.BAD_REQUEST).send({
        error: 'Id do usuario não informado',
      })
    }

    const acessoAccessKey = await acessoRepository.findFirst({
      where: { access_key: params.access_key as string },
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
      where: { login: params.login as string },
    })

    if (acessoLogin) {
      return response.status(HttpStatus.BAD_REQUEST).send({
        error: 'Esse login ja está sendo usado',
      })
    }

    next()
  }
}
