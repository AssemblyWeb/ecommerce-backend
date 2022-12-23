import dotenv from 'dotenv'
dotenv.config()

const getDataCore = async () => {
    const dataCore = process.env.DATACORE || "MONGO"
    if (dataCore === "MONGO") {
        const ModuleSource = await import('./CartsDaoMongo.js')
        return ModuleSource.default
    }
    if (dataCore === "MEMORY") {
        const ModuleSource = await import('./ContainerMemory.js')
        return ModuleSource.default
    }
    if (dataCore === "FS") {
        const ModuleSource = await import('./../DAO/products/ProductsDaoFs.js')
        return ModuleSource.default
    }
    if (dataCore === "FIREBASE") {
        const ModuleSource = await import('./ContainerFirebase.js')
        return ModuleSource.default
    }
    if (dataCore === "LOCAL") {
        // const ModuleSource = await import('./ContainerMongo.js')
        // return ModuleSource.default
    }
    if (dataCore === "KNEX") {
        // const ModuleSource = await import('./ContainerMongo.js')
        // return ModuleSource.default
    }

}

const CartService = async () => {
    const CartContainer = await getDataCore()
    const CartClass = await new CartContainer()
    return CartClass
}

export default CartService

