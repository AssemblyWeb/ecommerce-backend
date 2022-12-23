//no recibe nada por constructor
import ContainerMongo from '../../container/ContainerMongo.js'
import cartSchema from '../../model/cart.Schema.js'

class cartsDaoMongo extends ContainerMongo {
    constructor() {
        super("carts", cartSchema)
    }
}


export default cartsDaoMongo