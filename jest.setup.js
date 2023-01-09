require('jest-ts-auto-mock')

const { config } = require('dotenv')

config({ path: '.env.test' })

const { handleSeed } = require('./src/tests/seeds')

module.exports = async function () {
  await handleSeed()
}
