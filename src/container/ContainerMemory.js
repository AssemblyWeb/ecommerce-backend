class ProductContainer {
    constructor() {
    }

    async getAll() {
        return await [{ getAll: "memory" }]
    }
    // async create()
    // async update()
    // async getById(id)
    // async delete()


}
export default ProductContainer