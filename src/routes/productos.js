const express = require('express')
const router = express.Router()
const { productosService } = require('../services/productosService')

router.get('/api/productos', async (_, res) => {
    const allProducts = await productosService.getAllProducts()
    res.status(200).json(allProducts)
})

router.get('/api/productos/:id', async (req, res) => {
    const { id } = req.params
    const productId = await productosService.getProductById(+id)
    res.status(200).json(productId)
})


router.post('/api/productos', async (req, res) => {
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


router.put('/api/productos/:id', async (req, res) => {
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

router.delete('/api/productos/:id', (req, res) => {
    const { id } = req.params

    const deletedProduct = productosService.deleteProduct(+id)

    res.status(200).json(deletedProduct)
})
// router.delete('/:id', async (req, res) => {
//     try {
//         const { id } = req.params

//         const deleteProduct = await productosService.deleteProduct(+id)

//         res.status(200).json(`El producto con id ${deleteProduct} fue eliminado`)

//     } catch (error) {
//         res.status(404).json("No se pudo borrar el id " + req.params.id)
//     }
// })

module.exports = router