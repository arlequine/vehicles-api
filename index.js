const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
require('./db/mongodb')
const apiRouter = require('./apis')
const port = 3000

app.use(express.json())
app.use(cors())
app.use('/api/v1', apiRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})