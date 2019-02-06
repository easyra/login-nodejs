const express = require('express')
const router = express.Router()
const db = require('./userModel.js')

router.get('/',(req,res) => {
  db.getAllUsers().then(users => {
    res.json(db.getAllUsers())

  })
  
})

module.exports = router