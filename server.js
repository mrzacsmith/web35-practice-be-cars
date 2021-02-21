const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const colors = require('colors')
const cors = require('cors')
const RateLimit = require('express-rate-limit')

const connectDB = require('./utils/db.js')
const CarRouter = require('./routes/cars.js')
require('dotenv').config()

const server = express()

// rate limit
const limiter = new RateLimit({
    windowMs: 15*60*1000, // 15 mins
    max: 100,
    delayMs: 0
})

server.use(cors())
server.use(helmet())
server.use(morgan('dev'))
server.use(express.json())
connectDB()

let currentTime = new Date().toLocaleString()

server.get('/', (req, res) => {
  res.json({
    status: 'Success',
    message: 'Server is live',
    dateTime: currentTime,
    author: 'Github: @MrZacSmith',
  })
})

server.use('/api/cars', CarRouter)

const PORT = process.env.PORT || 3555

server.listen(PORT, () => {
  console.log(`\n** Server is listening on port ${PORT} **\n`.rainbow)
})
