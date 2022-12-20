import mongoose from 'mongoose'


const cartSchema = new mongoose.Schema({
    products: [String]
})

export default cartSchema