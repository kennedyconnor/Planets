import express from 'express';
import MoonService from '../services/MoonService';

let _service = new MoonService()
let _repo = _service.repository


export default class MoonController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAllMoons)
      .get('/:id', this.getMoonById)
      .post('', this.createMoon)
      .use('*', this.defaultRoute)
  }

  async getAllMoons(req, res, next) {
    try {
      let moons = await _repo.find({})
      return res.send(moons)
    } catch (error) { next(error) }
  }

  async getMoonById(req, res, next) {
    try {
      let moon = await _repo.findById(req.params.id)
      return res.send(moon)
    } catch (error) { next(error) }
  }

  async createMoon(req, res, next) {
    try {
      let moon = await _repo.create(req.body)
      return res.status(201).send(moon)
    } catch (error) {

    }
  }
  defaultRoute(req, res, next) {
    res.status(404).send('No such route Bro')
  }

}