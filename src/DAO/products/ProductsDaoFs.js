import ContainerFS from '../../container/ContainerFS.js'

class ProductFSDao extends ContainerFS {
    constructor() {
        super("productos")
    }
}

export default ProductFSDao