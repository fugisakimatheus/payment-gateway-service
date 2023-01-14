import { HttpStatus } from 'domain/enums'

export interface StatusErrorThrow {
  message: string
  status?: number
}

export class StatusError {
  static throw(message: any, status: keyof typeof HttpStatus) {
    throw { message, status: HttpStatus[status] }
  }
}
