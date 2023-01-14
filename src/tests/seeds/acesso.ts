import bcrypt from 'bcrypt'

import { prisma } from '../../infra/database/prisma'

export const handleSeedAcessos = async () => {
  const stockandoKey = await bcrypt.hash('stockandokey', 16)
  await prisma.acesso.create({
    data: {
      nome: 'Stockando',
      login: 'stockando',
      access_key: stockandoKey,
    },
  })

  const joao123 = await bcrypt.hash('joao123', 16)
  await prisma.acesso.create({
    data: {
      nome: 'João',
      login: 'gaymer',
      access_key: joao123,
    },
  })
}
