var express = require('express');
var bodyParser = require('body-parser');
var user = require('./routes/user.js');
var app = express();

app.use(bodyParser());

app.get('/', function(req, res){
  res.send('hello world');
});

app.route('/api/users')
  .get(user.read)
  .post(user.create)
  .put(user.update)
  .delete(user.delete)

app.listen(3000);