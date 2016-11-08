const express = require( 'express' );
const app = express(); // creates an instance of an express application

const routes = require('./routes/');
app.use('/', routes);


var nunjucks = require('nunjucks',{ noCache: true });


const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];


app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates

app.listen(3000, function(){console.log('server is listening')})
