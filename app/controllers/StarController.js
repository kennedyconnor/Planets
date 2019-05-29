import StarService from "../services/StarService";
import express from 'express'

let _service = new StarService()
let _repo = _service.repository


export default class StarController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAllStars)
      .get('/:id', this.getStarById)
      .post('', this.createStar)
      .use('*', this.defaultRoute)
  }

  async getAllStars(req, res, next) {
    try {
      let stars = await _repo.find({})
      return res.send(stars)
    } catch (error) { next(error) }
  }

  async getStarById(req, res, next) {
    try {
      let star = await _repo.findById(req.params.id)
      return res.send(star)
    } catch (error) { next(error) }
  }

  async createStar(req, res, next) {
    try {
      let star = await _repo.create(req.body)
      return res.status(201).send(star)
    } catch (error) {

    }
  }
  defaultRoute(req, res, next) {
    res.status(404).send('No such route Bro')
  }

}