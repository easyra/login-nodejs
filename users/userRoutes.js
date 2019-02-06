const express = require('express')
const router = express.Router()
const db = require('./userModel.js')

router.get('/',(req,res) => {
  db.getAllUsers().then(users => {
    res.json(users)

  })
  
})

module.exports = router