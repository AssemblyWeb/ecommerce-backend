import dotenv from 'dotenv'
dotenv.config()

const getDataCore = async () => {
    const dataCore = process.env.DATACORE || "MONGO"
    if (dataCore === "MEMORY") {
        const ModuleSource = await import('./ContainerMemory.js')
        return ModuleSource.default
    }
    if (dataCore === "FS") {
        const ModuleSource = await import('./ContainerFs.js')
        return ModuleSource.default
    }
    if (dataCore === "MONGO") {
        const ModuleSource = await import('./ContainerMongo.js')
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

const ProductService = async () => {
    const ProductContainer = await getDataCore()
    const ProductClass = await new ProductContainer()
    return ProductClass
}

export default ProductService

