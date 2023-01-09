const { config } = require('dotenv')

config({ path: '.env.test' })

const { handleResetSeed } = require('./src/tests/seeds')

module.exports = async function () {
  await handleResetSeed()
}
