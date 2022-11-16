const express = require('express')
const errorHandler = require('./src/middlewares/errorHandler.js')
const morgan = require('morgan')

const app = express()

//routes
const router = require('./src/routes/index.js')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', router)

// ERROR handlers
app.use(errorHandler)
app.use(morgan('dev'))

module.exports = app


