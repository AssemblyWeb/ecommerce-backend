import productosService from '../services/productosService.js'

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
        const productId = await productosService.getProductById(id)
        if (!productId) {
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
        const { name, price, thumbnail, stock, description } = req.body
        const newProduct = {
            name: name || null,
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
        const { name, price, thumbnail, stock, description } = req.body
        const productArguments = {
            id,
            name: name || null,
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
        const deletedProductId = await productosService.deleteProduct(id)
        if (!deletedProductId) {
            res.status(400).json({ status: 400, sucess: false, message: `id ${id} not found` })
            return
        }
        res.status(200).json({ status: 201, sucess: true, id: deletedProductId, message: `Product id ${deletedProductId} was deleted` })
    } catch (error) {
        next(error)
    }
}

export { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct }