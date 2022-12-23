import mongoose from 'mongoose'
class ContainerMongo {
    constructor(collection, schema) {
        this.model = mongoose.model(collection, schema)
    }

    async getAll() {
        return await this.model.find()
    }
    async create(entry) {
        return await this.model.create(entry)
    }
    async getById(id) {
        const getById = await this.model.findById(id)
        if (!getById) throw new Error("Id not found")
        return getById
    }
    async delete(id) {
        return await this.model.findByIdAndDelete(id)
    }
    async update({ id, ...rest }) {
        const update = await this.model.findByIdAndUpdate({ _id: id }, { ...rest }, { new: true })
        if (!update) throw new Error("Product not updated")
        return update
    }
    async addItem(cartId, productId, quantity) {
        const product = { productId, quantity }
        let cart = await this.model.findById(cartId)
        if (!cart) return // handlear respuesta

        let findProduct = cart.products.find(product => product.productId == productId)
        console.log(findProduct)
        if (!findProduct) {
            cart.products.push(product)
        } else {
            findProduct.quantity += quantity
        }
        await cart.save()
        return cart
    }

    async deleteItem(cartId, productId) {
        let cart = await this.getById(cartId)
        if (!cart) return // handlear respuesta

        cart.products = cart.products.filter(product => product.productId != productId)
        await cart.save()
        return cart
    }

}

export default ContainerMongo