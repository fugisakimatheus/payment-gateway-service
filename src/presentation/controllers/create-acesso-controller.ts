import { StatusErrorThrow } from 'data/errors'
import { CreateAcessoUseCase } from 'data/usecases/create-acesso-usecase'
import { HttpStatus } from 'domain/enums'
import { CreateAcessoRequest } from 'domain/requests/acesso'
import { CreateAcessoResponse } from 'domain/responses/acesso'

export class CreateAcessoController {
  static async handle(
    request: CreateAcessoRequest,
    response: CreateAcessoResponse,
  ) {
    try {
      const createAcessoUseCase = new CreateAcessoUseCase()
      const acesso = await createAcessoUseCase.handle(request.body)
      return response.status(HttpStatus.OK).json(acesso)
    } catch (error) {
      const typedError = error as StatusErrorThrow
      return response
        .status(typedError?.status || HttpStatus.BAD_REQUEST)
        .send({ error: typedError.message })
    }
  }
}
