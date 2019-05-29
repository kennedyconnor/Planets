import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  name: { type: String, required: true },
  galaxyId: { type: ObjectId, ref: 'galaxy', required: true },
}, { timestamps: true })

export default class StarService {
  get repository() {
    return mongoose.model('star', _schema)
  }
}