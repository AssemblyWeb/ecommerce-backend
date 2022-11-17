const fs = require('fs')
const usersJson = require("../../model/carts/carts.json")

class Cart {
    constructor(id, timestamp, products) {
        this.id = id
        this.timestamp = timestamp
        this.products = products
    }
    getAllCarts = async () => {
        const getAllCarts = await fs.promises.readFile(`./model/carts/carts.json`, 'utf8')
        const parsedCarts = JSON.parse(getAllCarts)
        return parsedCarts
    }
    addNewCart = async () => {
        const getAllCarts = await this.getAllCarts()
        const newCart = {
            id: getAllCarts.length + 1,
            timestamp: new Date().getTime(),
            products: []
        }
        getAllCarts.push(newCart)
        await fs.promises.writeFile(`./model/carts/carts.json`, JSON.stringify(getAllCarts))
        return newCart
    }

    getCartById = async (id) => {
        const getAllCarts = await this.getAllCarts()
        const cartFiltered = getAllCarts.filter(cart => cart.id === id)
        return cartFiltered
    }

    deleteCart = async (id) => {
        const getAllCarts = await this.getAllCarts()
        const AllCartsFiltered = getAllCarts.filter(cart => cart.id != id)
        await fs.promises.writeFile(`./model/carts/carts.json`, JSON.stringify(AllCartsFiltered))
        return id
    }

    getCartProducts = async (id) => {
        const getCartById = await this.getCartById(id)
        return getCartById[0].products
    }

    addNewProduct = async (id, newProduct) => {
        const getAllCarts = await this.getAllCarts()
        const getCartById = await this.getCartById(id)
        const indexOfCart = getAllCarts.findIndex(cart => cart.id === getCartById[0].id)

        getCartById[0].products.push(newProduct)
        getAllCarts[indexOfCart] = getCartById[0]
        await fs.promises.writeFile(`./model/carts/carts.json`, JSON.stringify(getAllCarts))

        return newProduct
    }

    deleteProduct = async (cartId, productId) => {
        const getAllCarts = await this.getAllCarts()
        const getCartById = await this.getCartById(cartId)
        const indexOfCart = getAllCarts.findIndex(cart => cart.id === getCartById[0].id)

        getCartById[0].products = getCartById[0].products.filter(product => product.id !== productId)
        getAllCarts[indexOfCart].products = getCartById[0].products

        await fs.promises.writeFile(`./model/carts/carts.json`, JSON.stringify(getAllCarts))
        return productId
    }

}

const cartService = new Cart(usersJson)

module.exports = { cartService }

