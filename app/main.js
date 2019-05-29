import express from 'express'
import './db/dbconfig'
let port = 3000
let server = express()
let bp = require('body-parser')

server.use(bp.urlencoded({ extended: true }))
server.use(bp.json())

//ABOVE THIS LINE DOES NOT CHANGE


//Register routes
import GalaxyController from './controllers/GalaxyController'
import StarController from './controllers/StarController';
import PlanetController from './controllers/PlanetController';
import MoonController from './controllers/MoonController';

server.use('/api/galaxies', new GalaxyController().router)
server.use('/api/stars', new StarController().router)
server.use('/api/planets', new PlanetController().router)
server.use('/api/moons', new MoonController().router)


//Below this line stays the same

//DEFAULT ERROR HANDLER
server.use((error, req, res, next) => {
  res.status(error.status || 400).send({ error: { message: error.message } })
})

server.listen(port, () => {
  console.log('Server running on port: ' + port)
})
