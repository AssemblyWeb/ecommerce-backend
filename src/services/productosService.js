import fs from 'fs'
// import * as productsJson from "../../model/products/productos.json"

import ProductService from '../container/index.js'

class Contenedor {
    constructor() { }

    getAllProducts = async () => {
        try {
            // const getAllProducts = await fs.promises.readFile(`./model/products/productos.json`, 'utf8') || []
            // const parsedProducts = JSON.parse(getAllProducts)
            // console.log(await ProductService.getAll())
            const products = await ProductService()
            const getAllProducts = products.getAll()
            return getAllProducts
        } catch (error) {
            console.error("No se pudieron traer todos los productos:", error)
        }
    }

    addProduct = async ({ name, price, thumbnail, stock, description }) => {
        try {
            const getAllProducts = await this.getAllProducts()
            const getProductsId = getAllProducts.map(product => product.id)
            const newProduct = {
                id: Math.max(...getProductsId) + 1,
                name, price, thumbnail, stock, description
            }
            getAllProducts.push(newProduct)
            await fs.promises.writeFile(`./model/products/productos.json`, JSON.stringify(getAllProducts))

            return newProduct
        } catch (error) {
            console.error("No se pudo agregar un nuevo producto", error)
        }
    }

    getProductById = async id => {
        try {
            const getAllProducts = await this.getAllProducts()
            const getProductById = getAllProducts.find(product => product.id === id)

            return [getProductById]
        } catch (error) {
            console.error("No se pudo obtener el id", id, error)
        }
    }

    updateProduct = async ({ id, name, price, thumbnail, stock, description }) => {
        try {
            const getAllProducts = await this.getAllProducts()
            const productFiltered = await this.getProductById(id)
            const indexOfProduct = getAllProducts.findIndex(product => product.id === productFiltered[0].id)
            getAllProducts[indexOfProduct] = {
                id,
                name: name != null ? name : productFiltered[0].name,
                price: price != null ? price : productFiltered[0].price,
                thumbnail: thumbnail != null ? thumbnail : productFiltered[0].thumbnail,
                stock: stock != null ? stock : productFiltered[0].stock,
                description: description != null ? description : productFiltered[0].description
            }
            await fs.promises.writeFile(`./model/products/productos.json`, JSON.stringify(getAllProducts))

            return getAllProducts[indexOfProduct]
        } catch (error) {
            console.error("No se pudo actualizar el producto:", id, error)
        }
    }

    deleteProduct = async (id) => {
        try {
            const getAllProducts = await this.getAllProducts()
            const productDeleted = this.getProductById(id)
            const productsFiltered = getAllProducts.filter(product => product.id != id)

            await fs.promises.writeFile(`./model/products/productos.json`, JSON.stringify(productsFiltered))

            return productDeleted
        } catch (error) {
            console.error("No se pudo borrar el producto:", id, error)
        }
    }

}
const productosService = new Contenedor()

export default productosService 
