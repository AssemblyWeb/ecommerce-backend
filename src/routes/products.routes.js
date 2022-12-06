const express = require('express')
const router = express.Router()
const { productosService } = require('../services/productosService')
const loginMiddleware = require('../middlewares/loginMiddleware.js')


router.get('/', loginMiddleware, async (_, res) => {
    const allProducts = await productosService.getAllProducts()
    res.status(200).json(allProducts)
})

router.get('/:id', loginMiddleware, async (req, res) => {
    const { id } = req.params
    const productId = await productosService.getProductById(+id)

    if (!productId[0]) {
        res.status(500).json({ status: 500, data: null, message: `id ${id} not found` })
        return
    }
    res.status(200).json(productId)
})


router.post('/', loginMiddleware, async (req, res) => {
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


router.put('/:id', loginMiddleware, async (req, res) => {
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