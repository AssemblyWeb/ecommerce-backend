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
        return deletedCart
    }

    addNewProduct = async (cartId, productId, quantity) => {
        const addProduct = await cart.addItem(cartId, productId, quantity)
        return addProduct
    }

    getCartById = async (id) => {
        const getCart = await cart.getById(id)
        return getCart
    }


    getCartProducts = async (id) => {
        const getCartById = await this.getCartById(id)
        return getCartById.products
    }



    deleteProduct = async (cartId, productId) => {
        const deletedProduct = await cart.deleteItem(cartId, productId)
        return deletedProduct
    }

}

const cartService = new Service()

export { cartService }

