const express = require('express')
const router = express.Router()
const loginMiddleware = require('../middlewares/loginMiddleware.js')
const { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct } = require('../controllers/productsController.js')


router.get('/', getAllProducts)

router.get('/:id', loginMiddleware, getProductById)

router.post('/', loginMiddleware, addProduct)

router.put('/:id', loginMiddleware, updateProduct)

router.delete('/:id', deleteProduct)

module.exports = router