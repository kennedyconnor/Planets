import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  name: { type: String, required: true },
  galaxyId: { type: ObjectId, ref: 'galaxy', required: true },
  starId: { type: ObjectId, ref: 'star', required: true },
  planetId: { type: ObjectId, ref: 'planet', required: true }
}, { timestamps: true })

export default class MoonService {
  get repository() {
    return mongoose.model('moon', _schema)
  }
}