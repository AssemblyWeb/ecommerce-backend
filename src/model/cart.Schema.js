import mongoose from 'mongoose'


const cartSchema = new mongoose.Schema({
    products: [{
        productId: {
            type: String
        },
        quantity: {
            type: Number
        }
    }]
})

export default cartSchema