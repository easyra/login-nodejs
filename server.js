const express = require('express')
const server = express()
server.user(express.json())


module.exports = {server}