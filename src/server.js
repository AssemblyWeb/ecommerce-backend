import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import morgan from 'morgan'

import mongoConnect from './common/config/mongo.js'
import errorHandler from './middlewares/errorHandler.js'
import router from './routes/index.js'
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoConnect()
//routes
app.use('/api', router)

// ERROR handlers
app.use(errorHandler)
app.use(morgan('dev'))

app.listen(PORT, () => {
    console.log(`Server listen on port http://localhost:${PORT} connected to ${process.env.DATACORE}`)
})


