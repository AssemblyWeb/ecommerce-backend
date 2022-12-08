const express = require('express')
const router = express.Router()
const { productosService } = require('../services/productosService')
const logginMiddleware = require('../middlewares/logginMiddleware.js')


router.get('/', logginMiddleware, async (_, res) => {
    const allProducts = await productosService.getAllProducts()
    res.status(200).json(allProducts)
})

router.get('/:id', logginMiddleware, async (req, res) => {
    const { id } = req.params
    const productId = await productosService.getProductById(+id)
    res.status(200).json(productId)
})


router.post('/', logginMiddleware, async (req, res) => {
    const { title, price, thumbnail, stock, description } = req.body
    const newProduct = {
        title: title || null,
        price: +price || null,
        thumbnail: thumbnail || null,
        stock: +stock || null,
        description: description || null
    }
    const addedProduct = await productosService.addProduct(newProduct)
    res.status(200).json(addedProduct)
})


router.put('/:id', logginMiddleware, async (req, res) => {
    const { id } = req.params
    const { title, price, thumbnail, stock, description } = req.body
    const productArguments = {
        id: +id,
        title: title || null,
        price: +price || null,
        thumbnail: thumbnail || null,
        stock: +stock || null,
        description: description || null
    }
    const updateProduct = await productosService.updateProduct(productArguments)
    res.status(200).json(updateProduct)
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    const deletedProduct = productosService.deleteProduct(+id)
    res.status(200).json(deletedProduct)
})

module.exports = router