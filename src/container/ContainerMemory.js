class ProductContainer {
    constructor() {
        this.db = [{
            "id": 1,
            "name": "remera",
            "price": 200,
            "thumbnail": "https://i.picsum.photos/id/329/200/300.jpg",
            "stock": 5,
            "description": "lorem"
        }]

    }

    getAll() {
        return this.db
    }

    create(newEntry) {
        this.db.push(newEntry)
        return newEntry
    }
    async getById(id) {
        return this.db.find(id => id)
    }
    // async update()
    // async delete()


}
export default ProductContainer