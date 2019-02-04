const express = require('express')
const server = express()
const userRoutes = require('./users/userRoutes.js')
server.use(express.json())
server.use('', userRoutes)

module.exports = server