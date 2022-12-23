import fs from 'fs'
import path from 'path'
import { getDirName } from '../utils/path.js'

class ProductContainer {
    constructor(filename) {
        this.DB_path = path.resolve(getDirName(), `../../DB_fs/products/${filename}.json`)
    }

    async getAll() {
        const allProducts = await fs.promises.readFile(this.DB_path, { encoding: 'utf8' })
        const allProductsParsed = JSON.parse(allProducts)
        return allProductsParsed
    }

    async create(newEntry) {
        const getAllProducts = await this.getAll()
        const getProductsId = getAllProducts.map(product => product.id)
        const newProduct = {
            id: Math.max(...getProductsId) + 1,
            ...newEntry
        }
        getAllProducts.push(newProduct)
        await fs.promises.writeFile(this.DB_path, JSON.stringify(getAllProducts))

        return newProduct
    }

    async getById(id) {
        const getAllProducts = await this.getAll()
        const getProductById = getAllProducts.find(product => product.id === +id)
        return getProductById
    }

    async delete(id) {
        const getAllProducts = await this.getAll()
        const productsFiltered = getAllProducts.filter(product => product.id !== +id)
        await fs.promises.writeFile(this.DB_path, JSON.stringify(productsFiltered))
        return id
    }

    async update({ id, name, price, thumbnail, stock, description }) {
        const entryFiltered = await this.getById(+id)

        if (!entryFiltered) return null

        const getAll = await this.getAll()
        const indexOfProduct = getAll.findIndex(product => product.id === entryFiltered.id)

        getAll[indexOfProduct] = {
            id: +id,
            name: name != null ? name : entryFiltered[0].name,
            price: price != null ? price : entryFiltered[0].price,
            thumbnail: thumbnail != null ? thumbnail : entryFiltered[0].thumbnail,
            stock: stock != null ? stock : entryFiltered[0].stock,
            description: description != null ? description : entryFiltered[0].description
        }
        await fs.promises.writeFile(this.DB_path, JSON.stringify(getAll))

        return getAll[indexOfProduct]
    }

}

export default ProductContainer