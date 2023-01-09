import { exec } from 'child_process'
import path from 'path'

import { handleSeedAcessos } from './acesso'
import { handleSeedMetodosPagamento } from './metodo-pagamento'
import { handleSeedPedidos } from './pedido'

export const runSeed = async () => {
  await handleSeedAcessos()
  await handleSeedMetodosPagamento()
  await handleSeedPedidos()
}

export const handleSeed = async () => {
  return new Promise((resolve, reject) => {
    exec('NODE_ENV=test yarn prisma migrate dev', async error => {
      if (error) {
        reject(error)
        return
      }
      await runSeed()
      resolve(null)
    })
  })
}

export const handleResetSeed = async () => {
  return new Promise((resolve, reject) => {
    const dbFile = path.resolve(__dirname, '../../../prisma/test.db')
    exec(`rm -rf ${dbFile}`, async error => {
      if (error) {
        reject(error)
        return
      }
      resolve(null)
    })
  })
}
