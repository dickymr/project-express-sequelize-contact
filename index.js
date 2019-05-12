require('dotenv').config()
const PORT = process.env.PORT
const express = require('express')
const app = express()
const morgan = require('morgan')

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(morgan('dev'))
// app.use(bodyParser.urlencoded({ extended: false }))

// require('./api/models')

// express router
const accounts = require('./api/accounts')
app.use('/', accounts)


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})
