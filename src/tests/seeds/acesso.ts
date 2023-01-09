import bcrypt from 'bcrypt'

import { prisma } from '../../infra/database/prisma'

export const handleSeedAcessos = async () => {
  const acesso1 = await bcrypt.hash('acesso1', 32)
  await prisma.acesso.create({
    data: {
      nome: 'Acesso 1',
      login: 'teste',
      access_key: acesso1,
    },
  })

  const joao123 = await bcrypt.hash('joao123', 32)

  await prisma.acesso.create({
    data: {
      nome: 'João Gamer',
      login: 'gaymer',
      access_key: joao123,
    },
  })
}
