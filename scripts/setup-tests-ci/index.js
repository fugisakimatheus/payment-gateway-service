const path = require('path')
const fs = require('fs/promises')

async function overrideDBProvider () {
  const prismaSchemaPath = path.resolve(__dirname, '../../prisma/schema.prisma')

  const data = await fs.readFile(prismaSchemaPath)
  const fileContent = data.toString()

  const changedDBProvider = fileContent.replace('provider = "postgresql"', 'provider = "sqlite"')
  await fs.writeFile(prismaSchemaPath, changedDBProvider)
}

overrideDBProvider()
