import { CreateAcessoParams } from 'domain/usecases/create-acesso-usecase'
import { UpdateAcessoParams } from 'domain/usecases/update-acesso-usecase'

import { BaseRequestBody } from '.'

export type CreateAcessoRequest = BaseRequestBody<CreateAcessoParams>

export type UpdateAcessoRequest = BaseRequestBody<UpdateAcessoParams>
