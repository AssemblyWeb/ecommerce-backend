import mongoose from 'mongoose'
class ContainerMongo {
    constructor(collection, schema) {
        this.model = mongoose.model(collection, schema)
    }

    async getAll() {
        return await this.model.find()
    }
    async create(entry) {
        return await this.model.create(entry)
    }
    async getById(id) {
        const getById = await this.model.findById(id)
        if (!getById) throw new Error("Id not found")
        return getById
    }
    async delete(id) {
        return this.model.deleteById(id)
    }
    async update({ id, ...rest }) {
        const update = await this.model.findByIdAndUpdate({ _id: id }, { ...rest }, { new: true })
        if (!update) throw new Error("Product not updated")
        return update
    }

}

export default ContainerMongo