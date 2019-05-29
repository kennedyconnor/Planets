import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  name: { type: String, required: true },
}, { timestamps: true })

export default class GalaxyService {
  get repository() {
    return mongoose.model('galaxy', _schema)
  }
}