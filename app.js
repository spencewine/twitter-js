const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.get('/',function(req,res,next){
  console.log("Hello from the Server")
  res.send("Hello from Spencer")
})

app.listen(3000, function(){console.log('server is listening')})
