const { dbcontext } = require('../database/models/dbcontext')

const getUsers = async (event, context) => {
  const data = await dbcontext.Users.findAll({
    where: {
      deleted: false,
    },
    attributes: ['nickName', 'email', 'birthday', 'createdAt', 'updatedAt']
  })
  const users = data.map(match => {
    return {...match['dataValues']}
  })
  return {
    statusCode: 200,
    body: JSON.stringify({
       message: "Get Users Function :B",
       users
    })
  }
}

module.exports = { getUsers }
