const express = require( 'express' );
const app = express(); // creates an instance of an express application
var nunjucks = require('nunjucks',{ noCache: true });


const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];



app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates





app.use('/',function(req,res,next){

  console.log(req.method, req.path)

  next();
})

app.use('/special',function(req,res,next){

  console.log("you have reached a special area.")

  next();
})



app.get('/special/news',function(req,res,next){
  console.log("Hello from the Server")
  res.send("Hello from Spencer")
})

app.get('/home',function(req,res,next){

  
  res.render( 'index', {title: 'Hall of Fame', people: people} );


})



app.listen(3000, function(){console.log('server is listening')})
