/* eslint-disable no-console */
import { PrismaClient } from '@prisma/client'

const isDevelopment = process.env.NODE_ENV === 'dev'

export const prisma = new PrismaClient({
  log: isDevelopment
    ? [
        {
          emit: 'event',
          level: 'query',
        },
      ]
    : [],
})

if (isDevelopment) {
  prisma.$on('query', e => {
    console.log('Query: ' + e.query)
    console.log('Params: ' + e.params)
    console.log('Duration: ' + e.duration + 'ms')
  })
}
