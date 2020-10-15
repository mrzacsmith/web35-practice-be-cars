const router = require('express').Router()
const colors = require('colors')
const Car = require('../models/Cars.js')

let currentTime = new Date().toLocaleString()

// @desc:   Test router
// @route:  GET /test
router.get('/test', (req, res) => {
  res.send(`GET for Car /test is currently running ${currentTime}`)
})

// @desc:   Get all cars
// @route:  GET /
router.get('/', (req, res) => {
  Car.find(req.query)
    .then((cars) => res.json(cars))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

// @desc:    Get car by id
// @route:   GET /:id
router.get('/:id', (req, res) => {
  Car.findById(req.params.id)
    .then((car) => res.json(car))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

// @desc:   Add new cars
// @route:  POST /add
router.post('/add', (req, res) => {
  const newCar = new Car({
    vin: req.body.vin,
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    color: req.body.color,
    mileage: req.body.mileage,
    wrecked: req.body.wrecked,
    autoTrans: req.body.autoTrans,
    doors: req.body.doors,
  })

  newCar
    .save()
    .then(() => res.json(newCar))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

module.exports = router
