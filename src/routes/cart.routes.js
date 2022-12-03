const express = require('express')
const router = express.Router()
const { cartService } = require('../services/cartService')
const loginMiddleware = require('../middlewares/loginMiddleware.js')


router.post('/', loginMiddleware, async (_, res) => {
    const addNewCart = await cartService.addNewCart()
    res.status(200).json(addNewCart)
})

router.delete('/:cartId', loginMiddleware, async (req, res) => {
    const { cartId } = req.params
    const deleteCart = await cartService.deleteCart(+cartId)
    res.status(200).json(deleteCart)
})

router.get('/:cartId/productos', loginMiddleware, async (req, res) => {
    const { cartId } = req.params
    const getCartProducts = await cartService.getCartProducts(+cartId)
    res.status(200).json(getCartProducts)
})

router.post('/:cartId/productos', loginMiddleware, async (req, res) => {
    const { cartId } = req.params
    const newProduct = { id, title, price, timestamp, code, thumbnail, stock, description } = req.body
    const addNewProduct = await cartService.addNewProduct(+cartId, newProduct)
    res.status(200).json(addNewProduct)
})

router.delete('/:cartId/productos/:productId', loginMiddleware, async (req, res) => {
    const { cartId, productId } = req.params
    const deleteProduct = await cartService.deleteProduct(+cartId, +productId)
    res.status(200).json(deleteProduct)
})

module.exports = router