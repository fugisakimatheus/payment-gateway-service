import { prisma } from '../../infra/database/prisma'

export const handleSeedMetodosPagamento = async () => {
  await prisma.metodoPagamento.create({
    data: {
      nome: 'Crédito',
      tipo: 'credito',
    },
  })

  await prisma.metodoPagamento.create({
    data: {
      nome: 'Débito',
      tipo: 'debito',
    },
  })

  await prisma.metodoPagamento.create({
    data: {
      nome: 'Pix',
      tipo: 'pix',
    },
  })

  await prisma.metodoPagamento.create({
    data: {
      nome: 'Boleto',
      tipo: 'boleto',
    },
  })
}
