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
        this.getAll().push(newEntry)
        return newEntry
    }

    getById(id) {
        return this.getAll().find(product => product.id === id)
    }

    delete(id) {
        if (!this.getById(id)) return null

        const deleted = this.getAll().filter(product => product.id !== id)
        this.db = deleted
        return id
    }

    update({ id, name, price, thumbnail, stock, description }) {
        const entryFiltered = this.getById(id)
        if (!entryFiltered) return null

        const getAll = this.getAll()
        const indexOfProduct = getAll.findIndex(product => product.id === entryFiltered.id)

        this.db[indexOfProduct] = {
            id,
            name: name != null ? name : entryFiltered[0].name,
            price: price != null ? price : entryFiltered[0].price,
            thumbnail: thumbnail != null ? thumbnail : entryFiltered[0].thumbnail,
            stock: stock != null ? stock : entryFiltered[0].stock,
            description: description != null ? description : entryFiltered[0].description
        }
        return this.db[indexOfProduct]
    }

}

export default ProductContainer