import CartService from '../DAO/carts/index.js'
const cart = await CartService()
class Service {
    constructor() { }

    addNewCart = async () => {
        try {
            const newEntry = await cart.create()
            return newEntry
        } catch (error) {
            console.error("No se pudo agregar un nuevo carrito", error)

        }
    }

    deleteCart = async (id) => {
        const deletedCart = await cart.delete(id)
        // const getAllCarts = await this.getAllCarts()
        // const AllCartsFiltered = getAllCarts.filter(cart => cart.id != id)
        // await fs.promises.writeFile(`./model/carts/carts.json`, JSON.stringify(AllCartsFiltered))
        return id
    }

    addNewProduct = async (id, newProduct) => {
        // const getAllCarts = await this.getAllCarts()
        // const getCartById = await this.getCartById(id)
        const indexOfCart = getAllCarts.findIndex(cart => cart.id === getCartById[0].id)

        getCartById[0].products.push(newProduct)
        getAllCarts[indexOfCart] = getCartById[0]
        await fs.promises.writeFile(`./model/carts/carts.json`, JSON.stringify(getAllCarts))

        return newProduct
    }

    getCartById = async (id) => {
        const getAllCarts = await this.getAllCarts()
        const cartFiltered = getAllCarts.filter(cart => cart.id === id)
        return cartFiltered
    }


    getCartProducts = async (id) => {
        const getCartById = await this.getCartById(id)
        return getCartById[0].products
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

const cartService = new Service()

export { cartService }

