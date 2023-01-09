import { StatusErrorThrow } from 'data/errors'
import { UpdateAcessoUseCase } from 'data/usecases/update-acesso-usecase'
import { HttpStatus } from 'domain/enums'
import { UpdateAcessoRequest } from 'domain/requests/acesso'
import { UpdateAcessoResponse } from 'domain/responses/acesso'

export class UpdateAcessoController {
  static async handle(
    request: UpdateAcessoRequest,
    response: UpdateAcessoResponse,
  ) {
    try {
      const updateAcessoUseCase = new UpdateAcessoUseCase()
      const acesso = await updateAcessoUseCase.handle(request.body)
      return response.status(HttpStatus.OK).json(acesso)
    } catch (error) {
      const typedError = error as StatusErrorThrow
      return response
        .status(typedError?.status || HttpStatus.BAD_REQUEST)
        .send({ error: typedError.message })
    }
  }
}
