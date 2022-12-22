import mongoose from 'mongoose'


const cartSchema = new mongoose.Schema({
    products: [{
        id: {
            type: String
        },
        quantity: {
            type: Number
        }
    }]
})

export default cartSchema