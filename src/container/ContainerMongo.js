import mongoose from 'mongoose'

class ContainerMongo {
    constructor(collection, schema) {
        this.model = mongoose.model(collection, schema)
    }

    async getAll() {
        const getAll = await this.model.find()
        return getAll
    }
    // async create()
    // async update()
    // async getById(id)
    // async delete()


}

export default ContainerMongo