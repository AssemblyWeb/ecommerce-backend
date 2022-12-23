import express from 'express'
const router = express.Router()
import { addNewCart, deleteCart, getCartProducts, addNewProduct, deleteProduct } from '../controllers/cartController.js'
import loginMiddleware from '../middlewares/loginMiddleware.js'

router.post('/', loginMiddleware, addNewCart)
router.delete('/:cartId', loginMiddleware, deleteCart)
router.get('/:cartId/productos', loginMiddleware, getCartProducts)
router.post('/:cartId/productos', loginMiddleware, addNewProduct)
router.delete('/:cartId/productos/:productId', loginMiddleware, deleteProduct)

export default router