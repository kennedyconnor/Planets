import express from 'express'
import GalaxyService from "../services/GalaxyService";


let _service = new GalaxyService
let _repo = _service.repository

export default class GalaxyController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAllGalaxies)
      .get('/:id', this.getGalaxyById)
      .post('', this.createGalaxy)
      .use('*', this.defaultRoute)
  }

  async getAllGalaxies(req, res, next) {
    try {
      let galaxies = await _repo.find({})
      return res.send(galaxies)
    } catch (error) { next(error) }
  }

  async  getGalaxyById(req, res, next) {
    try {
      let galaxy = await _repo.findById(req.params.id)
      return res.send(galaxy)
    } catch (error) { next(error) }
  }

  async createGalaxy(req, res, next) {
    try {
      let galaxy = await _repo.create(req.body)
      return res.status(201).send(galaxy)
    } catch (error) {

    }
  }

  defaultRoute(req, res, next) {
    res.status(404).send('No Such Route')
  }
}