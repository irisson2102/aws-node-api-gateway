// import sequelize from '../connection.js'
// import Users from './users.js'
// import Meets from './meets.js'
// import MeetUsers from './meetUsers.js'
// import relationships from './relationships.js'

const sequelize = require('../connection')

const dbcontext = {
  Users: require('./users')(sequelize),
  // Meets: Meets(sequelize),
  // MeetUsers: MeetUsers(sequelize),
}

// relationships(dbcontext)

module.exports = { dbcontext }