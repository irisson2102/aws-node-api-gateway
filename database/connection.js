const Sequelize = require('sequelize')
const { config } = require('./config')

module.exports = new Sequelize({
  username: config.user,
  password: config.password,
  database: config.database,
  host: config.server,
  encrypt: config.encrypt,
  port: config.port,
  dialect: config.dialect,
  pool: config.pool
})

