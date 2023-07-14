const envVar = process.env.AN_ENV_VARIABLE || 'Not working'

const hello = async (event, context) => {

  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hola mundo desde AWS Lamda, env vars status: ${envVar}` })
  }
}

module.exports = { hello }