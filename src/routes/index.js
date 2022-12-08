//requiero la clase Router del módulo de express
const router = require('express').Router()

//requiero las rutas de carritos
const productsRoutes = require('./products.routes.js')
const cartRoutes = require('./cart.routes.js')

//defino que las rutas de products contengan "/"
router.use('/productos', productsRoutes)

router.use('/carrito', cartRoutes)


router.get('*', (req, res) => { logger.warn(`Ruta ${req.url} con metodo ${req.method} no encontrada en el servidor.`) })

module.exports = router