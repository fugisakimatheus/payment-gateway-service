import { PedidoStatus } from '../../domain/enums'
import { prisma } from '../../infra/database/prisma'

export const handleSeedPedidos = async () => {
  await prisma.pedido.create({
    data: {
      id_acesso: 1,
      id_cliente: 1,
      id_metodo_pagamento: 1,
      status: PedidoStatus.FINALIZADO,
      total: 74.57,
    },
  })

  await prisma.pedido.create({
    data: {
      id_acesso: 2,
      id_cliente: 1,
      id_metodo_pagamento: 2,
      status: PedidoStatus.AGUARDANDO_PAGAMENTO,
      total: 74.57,
    },
  })

  await prisma.pedido.create({
    data: {
      id_acesso: 1,
      id_cliente: 2,
      id_metodo_pagamento: 1,
      status: PedidoStatus.CANCELADO,
      total: 74.57,
    },
  })

  await prisma.pedido.create({
    data: {
      id_acesso: 2,
      id_cliente: 45,
      id_metodo_pagamento: 3,
      status: PedidoStatus.ESTORNADO,
      total: 74.57,
    },
  })
}
