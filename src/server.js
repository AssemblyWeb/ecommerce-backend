require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')

const errorHandler = require('./middlewares/errorHandler.js')
const router = require('./routes/index.js')
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.use('/api', router)

// ERROR handlers
app.use(errorHandler)
app.use(morgan('dev'))

app.listen(PORT, () => {
    console.log(`Server listen on port http://localhost:${PORT}`)
})


