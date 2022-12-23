import express from 'express'
const router = express.Router()
import loginMiddleware from '../middlewares/loginMiddleware.js'
import { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct } from '../controllers/productsController.js'

router.get('/', getAllProducts)
router.get('/:id', loginMiddleware, getProductById)
router.post('/', loginMiddleware, addProduct)
router.put('/:id', loginMiddleware, updateProduct)
router.delete('/:id', deleteProduct)

export default router