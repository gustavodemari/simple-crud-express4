var express = require('express');
var bodyParser = require('body-parser');
var user = require('./routes/user.js');
var app = express();

//Enable req.body method to get data filled by forms
app.use(bodyParser());

//Logging the request method, url and IP address
app.use(function(req, res, next){
  console.log('%s %s %s', req.method, req.url, req.ip);
  next();
});

//Default url
app.get('/', function(req, res){
  res.send('hello world');
});

//Users route
app.route('/api/users')
  .get(user.read)
  .post(user.create)
  .put(user.update)
  .delete(user.delete)

var port = Number(process.env.PORT || 5000);

app.listen(port);
console.log('Simple-CRUD-Express4 running');