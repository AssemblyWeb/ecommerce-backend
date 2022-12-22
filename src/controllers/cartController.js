import { cartService } from '../services/cartService.js'

const addNewCart = async (_, res, next) => {
    try {
        const addNewCart = await cartService.addNewCart()
        res.status(201).json({ status: 201, success: true, data: addNewCart })
    } catch (error) {
        next(error)
    }
}

const deleteCart = async (req, res, next) => {
    try {
        const { cartId } = req.params
        const deleteCart = await cartService.deleteCart(cartId)
        res.status(204).json({ status: 204 })
    } catch (error) {
        next(error)
    }
}

const getCartProducts = async (req, res, next) => {
    try {
        const { cartId } = req.params
        const getCartProducts = await cartService.getCartProducts(+cartId)
        res.status(201).json({ status: 201, success: true, data: getCartProducts })
    } catch (error) {
        next(error)
    }
}

const addNewProduct = async (req, res, next) => {
    try {
        const { cartId } = req.params
        const newProduct = { id, quantity } = req.body
        const addNewProduct = await cartService.addNewProduct(cartId, newProduct)
        res.status(201).json({ status: 201, success: true, data: addNewProduct })
    } catch (error) {
        next(error)
    }
}

const deleteProduct = async (req, res, next) => {
    try {
        const { cartId, productId } = req.params
        const deleteProduct = await cartService.deleteProduct(+cartId, +productId)
        res.status(204).json({ status: 204, success: true, data: deleteProduct })
    } catch (error) {
        next(error)
    }
}

export { addNewCart, deleteCart, getCartProducts, addNewProduct, deleteProduct }