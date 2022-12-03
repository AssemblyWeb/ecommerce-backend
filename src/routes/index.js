//requiero la clase Router del módulo de express
const router = require('express').Router()

//requiero las rutas de carritos
const productsRoutes = require('./products.routes.js')
const cartRoutes = require('./cart.routes.js')

//defino que las rutas de products contengan "/"
router.use('/productos', productsRoutes)

router.use('/carrito', cartRoutes)


router.get('/*', (_, res) => {
    res.status(404).json({ "status": 404 })
})

module.exports = router