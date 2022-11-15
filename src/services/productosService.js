const fs = require('fs')
const { v4: uuidv4 } = require('uuid')
const productsJson = require("./productos.json")

class Contenedor {
    constructor(id, name, timestamp, code, description, price, thumbnail, stock) {
        this.id = id
        this.timestamp = timestamp
        this.code = code
        this.name = name
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.stock = stock
    }

    getAllProducts = async () => {
        try {
            const getAllProducts = await fs.promises.readFile(`./src/services/productos.json`, 'utf8')
            const parsedProducts = JSON.parse(getAllProducts)
            return parsedProducts
        } catch (error) {
            console.error("No se pudieron traer todos los productos:", error)
        }
    }

    addProduct = async ({ title, price, thumbnail, stock, description }) => {
        try {
            const getAllProducts = await this.getAllProducts()
            const getProductsId = getAllProducts.map(product => product.id)
            const newProduct = {
                id: Math.max(...getProductsId) + 1,
                timestamp: new Date().getTime(),
                code: uuidv4(),
                title, price, thumbnail, stock, description
            }
            getAllProducts.push(newProduct)
            await fs.promises.writeFile(`./src/services/productos.json`, JSON.stringify(getAllProducts))

            return newProduct
        } catch (error) {
            console.error("No se pudo agregar un nuevo producto", error)
        }
    }

    getProductById = async id => {
        try {
            const getAllProducts = await this.getAllProducts()
            const getProductById = getAllProducts.filter(product => product.id === id)
            return getProductById
        } catch (error) {
            console.error("No se pudo obtener el id", id, error)
        }
    }


    updateProduct = async ({ id, ...rest }) => {
        await this.deleteProduct(id)
        const addedProduct = await this.addProduct(rest)

        return addedProduct
    }

    deleteProduct = async (id) => {
        const getAllProducts = await this.getAllProducts()

        const productDeleted = this.getProductById(id)
        const productsFiltered = getAllProducts.filter(product => product.id != id)
        await fs.promises.writeFile(`./src/services/productos.json`, JSON.stringify(productsFiltered))

        return productDeleted
    }

}

//
const productosService = new Contenedor(productsJson)

module.exports = { productosService }
