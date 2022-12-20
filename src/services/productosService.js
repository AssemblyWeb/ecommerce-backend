import ProductService from '../container/index.js'

const products = await ProductService()
class Service {
    constructor() { }

    getAllProducts = async () => {
        try {
            const getAllProducts = await products.getAll()
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
            const newEntry = await products.create(newProduct)

            return newEntry
        } catch (error) {
            console.error("No se pudo agregar un nuevo producto", error)
        }
    }

    getProductById = async id => {
        try {
            return await products.getById(id)
        } catch (error) {
            console.error("No se pudo obtener el id", id, error)
        }
    }

    updateProduct = async (productArguments) => {
        try {
            return await products.update(productArguments)
        } catch (error) {
            console.error("No se pudo actualizar el producto:", id, error)
        }
    }

    deleteProduct = async (id) => {
        try {
            return await products.delete(id)
        } catch (error) {
            console.error("No se pudo borrar el producto:", id, error)
        }
    }

}
const productosService = new Service()

export default productosService 
