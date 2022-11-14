const fs = require('fs')
const productsJson = require("./productos.json")

class Contenedor {
    constructor(filename) {
        this.filename = filename
    }
    getAllProducts = () => productsJson

    addProduct = (title, price, thumbnail) => {
        let newProduct = {
            id: this.getAllProducts().length + 1,
            title, price, thumbnail
        }
        this.getAllProducts().push(newProduct)
        fs.writeFile(`./src/services/${this.filename}`, JSON.stringify(this.getAllProducts()))
    }

    getProductById = id => this.getAllProducts().filter(product => product.id === id)

    updateProduct = ({ id, ...rest }) => {
        // TODO METHOD
        const productFiltered = this.getProductById(id)
        productFiltered[0] = { id, ...rest }
        console.log(productFiltered)
        return productFiltered
    }

}

const productosService = new Contenedor("productos.json")

module.exports = { productosService }
