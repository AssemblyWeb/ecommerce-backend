const router = require('express').Router()
//requiero la clase Router del módulo de express

const products = require('./productos.js')
//requiero las rutas de products

router.use('/', products)
//defino que las rutas de products contengan "/"


router.get('*', (req, res) => { logger.warn(`Ruta ${req.url} con metodo ${req.method} no implementadas en el servidor.`) })

module.exports = router
//exporto para poder usar el enrrutador principal en app.js