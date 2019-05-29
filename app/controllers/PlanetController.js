import express from 'express'
import PlanetService from "../services/PlanetService";

let _service = new PlanetService()
let _repo = _service.repository


export default class PlanetController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAllPlanets)
      .get('/:id', this.getPlanetById)
      .post('', this.createPlanet)
      .use('*', this.defaultRoute)
  }

  async getAllPlanets(req, res, next) {
    try {
      let planets = await _repo.find({})
      return res.send(planets)
    } catch (error) { next(error) }
  }

  async getPlanetById(req, res, next) {
    try {
      let planet = await _repo.findById(req.params.id)
      return res.send(planet)
    } catch (error) { next(error) }
  }

  async createPlanet(req, res, next) {
    try {
      let planet = await _repo.create(req.body)
      return res.status(201).send(planet)
    } catch (error) {

    }
  }
  defaultRoute(req, res, next) {
    res.status(404).send('No such route Bro')
  }

}