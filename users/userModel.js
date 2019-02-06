const db = require('./userDataConfig')

module.exports = {
  getAllUsers
}

function getAllUsers(){
  return db('users')
}

function getUerbyId(id){
  return db('users').where(id)
}