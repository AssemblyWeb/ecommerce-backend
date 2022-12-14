//no recibe nada por constructor
import ContainerMongo from '../../container/ContainerMongo.js'
import productSchema from '../../model/product.Schema.js'

class ProductsDaoMongo extends ContainerMongo {
    constructor() {
        super("products", productSchema)
    }
}


export default ProductsDaoMongo