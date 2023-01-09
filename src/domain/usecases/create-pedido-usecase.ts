import { Pedido } from '@prisma/client'

export type CreatePedidoParams = {
  id_transacao: number
  id_cliente: number
  total: number
  status: string
  id_acesso: number
  id_metodo_pagamento: number
  arquivado: boolean
}

export interface ICreatePedidoUseCase {
  handle(params: CreatePedidoParams): Promise<Pedido>
}
