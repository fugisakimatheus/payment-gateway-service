import { Pedido } from '@prisma/client'

export type UpdatePedidoParams = {
  id: number
  id_acesso?: number
  id_transacao?: number
  id_cliente?: number
  total?: number
  status?: string
  id_metodo_pagamento?: number
  arquivado?: boolean
}

export interface IUpdatePedidoUseCase {
  handle(params: UpdatePedidoParams): Promise<Pedido>
}
