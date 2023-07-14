// import sequelize from '../connection.js'
// import Users from './users.js'
// import Meets from './meets.js'
// import MeetUsers from './meetUsers.js'
// import relationships from './relationships.js'

const { sequelize } = require('../connection')
const { Users } = require('./users')

const dbcontext = {
  Users: Users(sequelize),
  // Meets: Meets(sequelize),
  // MeetUsers: MeetUsers(sequelize),
}

// relationships(dbcontext)

module.exports = { dbcontext }