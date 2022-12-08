//import la clase Router del módulo de express
import express from 'express'
const router = express.Router()

//importo las rutas de carritos
import productsRoutes from './products.routes.js'
// import cartRoutes from './cart.routes.js'

//defino que las rutas de products contengan "/"
router.use('/productos', productsRoutes)
// router.use('/carrito', cartRoutes)

router.get('/*', (_, res) => {
    res.status(404).json({ status: 404, message: `Not found` })
})

export default router