const { productosService } = require('../services/productosService')

const getAllProducts = async (_, res, next) => {
    try {
        const allProducts = await productosService.getAllProducts()
        res.status(201).json({ status: 201, success: true, data: allProducts })
    } catch (error) {
        next(error)
    }
}

const getProductById = async (req, res, next) => {
    try {
        const { id } = req.params
        const productId = await productosService.getProductById(+id)

        if (!productId[0]) {
            res.status(400).json({ status: 400, success: false, data: null, message: `id ${id} not found` })
            return
        }

        res.status(200).json({ status: 201, sucess: true, data: productId })
    } catch (error) {
        next(error)
    }
}

const addProduct = async (req, res, next) => {
    try {
        const { title, price, thumbnail, stock, description } = req.body
        const newProduct = {
            title: title || null,
            price: +price || null,
            thumbnail: thumbnail || null,
            stock: +stock || null,
            description: description || null
        }
        const addedProduct = await productosService.addProduct(newProduct)

        res.status(201).json({ status: 201, sucess: true, data: addedProduct })
    } catch (error) {
        next(error)
    }
}

const updateProduct = async (req, res, next) => {
    try {
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
        if (!updateProduct) {
            res.status(400).json({ status: 400, sucess: false, data: null, message: `id ${id} not found` })
            return
        }
        res.status(201).json({ status: 201, sucess: true, data: updateProduct })
    } catch (error) {
        next(error)
    }
}

const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedProduct = await productosService.deleteProduct(+id)
        console.log(deletedProduct)
        if (!deletedProduct) {
            res.status(400).json({ status: 400, data: null, message: `id ${id} not found` })
            return
        }
        res.status(200).json(deletedProduct)
    } catch (error) {
        next(error)
    }
}

module.exports = { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct }