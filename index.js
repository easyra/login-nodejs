const server = require('./server')
const port = 9000
server.listen(port, err => {
  if(err){
    console.log(err)
  } else {
    console.log(`Server running at port: ${port}`);
  }
})