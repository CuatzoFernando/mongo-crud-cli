const { connect, connection } = require('mongoose')
const { MONGODB_URI } = require('./config')

const connectDB = async () => {
  await connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true })
}

connection.on('error', (err) => {
  console.log(err)
})

module.exports = { connectDB, connection }
