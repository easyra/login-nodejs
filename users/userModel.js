const db = require('./userDataConfig')

module.exports = {
  getAllUsers
}

function getAllUsers(){
  return db('users')
}