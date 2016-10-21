var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// support JSON-encoded bodies
app.use(bodyParser.json());

// support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res){
  res.render('pages/index');
});

// about page
app.get('/about', function(req, res){
  res.render('pages/about');
});

// contact page
app.get('/contact', function(req, res){
  res.render('pages/contact');
});

app.post('/contact', function(req, res){
  var name    = req.body.name,
      email   = req.body.email,
      message = req.body.message;

  console.log(name + ' ' + email+ ' ' + message);
  res.render('pages/index');
})

app.listen(8080);
console.log('server is running on port 8080');
