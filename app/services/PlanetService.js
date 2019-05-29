import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  name: { type: String, required: true },
  galaxyId: { type: ObjectId, ref: 'galaxy', required: true },
  starId: { type: ObjectId, ref: 'star', required: true }
}, { timestamps: true })

export default class PlanetService {
  get repository() {
    return mongoose.model('planet', _schema)
  }
}