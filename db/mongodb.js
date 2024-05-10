const mongoose = require('mongoose')

const url = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@cluster0.kdp2nt1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(url)
  .then(() => {
    console.log('Base de datos MONGODB conectada')
  })
  .catch((error) => {
    console.error(error)
  })

module.exports = mongoose