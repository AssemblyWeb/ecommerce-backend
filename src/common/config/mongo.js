import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const mongoConnect = async () => {
    if (process.env.DATACORE === 'MONGO') {
        const MONGO_USER = process.env.MONGO_USER
        const MONGO_PASS = process.env.MONGO_PASS
        const options = "?retryWrites=true&w=majority"

        mongoose.set('strictQuery', false)
        const connectionString = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@coderecommerce.yvdgz6r.mongodb.net/${options}`

        try {
            await mongoose.connect(connectionString, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            console.info('Connected to MONGO')
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default mongoConnect