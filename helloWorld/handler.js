const hello = async (event, context) => {

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hola mundo desde AWS Lamda" })
  }
}

module.exports = { hello }