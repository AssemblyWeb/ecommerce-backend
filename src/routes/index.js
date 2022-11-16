//requiero la clase Router del módulo de express
const router = require('express').Router()

//requiero las rutas de carritos
const products = require('./productos.js')
const carrito = require('./carrito.js')

//defino que las rutas de products contengan "/"
router.use('/', products)

router.get('/carrito', "hola")


router.get('*', (req, res) => { logger.warn(`Ruta ${req.url} con metodo ${req.method} no encontrada en el servidor.`) })

module.exports = router