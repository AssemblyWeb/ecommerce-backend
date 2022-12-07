const express = require('express')
const router = express.Router()
const { addNewCart, deleteCart, getCartProducts, addNewProduct, deleteProduct } = require('../controllers/cartController.js')
const loginMiddleware = require('../middlewares/loginMiddleware.js')


router.post('/', loginMiddleware, addNewCart)

router.delete('/:cartId', loginMiddleware, deleteCart)

router.get('/:cartId/productos', loginMiddleware, getCartProducts)

router.post('/:cartId/productos', loginMiddleware, addNewProduct)

router.delete('/:cartId/productos/:productId', loginMiddleware, deleteProduct)

module.exports = router