//Array to store users
var users = [];

exports.printMethodUrl = function (req, res) {
  res.json(req.method + ' ' + req.url);
};

//Creating user method
exports.create = function (req, res) {
  var user = req.body.user;
  if (user) {
    user.id = Number(user.id);
    users.push(user);
    res.json(200, {message: 'User created!'});
  }
  else {
    res.json(400, {message: 'Invalid input, try again'});
  }
};

//Reading users array method
exports.read = function (req, res) {
  if (req.params.id) {
    var id = Number(req.params.id);
    for (var i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        res.json(200, users[i]);
      }
    }
    res.json(400, {message: 'User not found'});
  }
  else {
    res.json(200, users);
  }
};

//Update user info method
exports.update = function (req, res) {
  var user = req.body.user;
  if (user) {
    user.id = Number(user.id);
    for (var i = 0; i < users.length; i++) {
      if (users[i].id === user.id) {
        users[i] = user;
        res.json(200, {message: 'User updated!'});
      }
    }
    res.json(400, {message: 'User not found'});
  }
  else {
    res.json(400, {message: 'Invalid input, try again'});
  }
};

//Delete user method
exports.delete = function (req, res) {
  var user = req.body.user;
  if (user) {
    user.id = Number(user.id);
    for (var i = 0; i < users.length; i++) {
      if (users[i].id === user.id) {
        users.splice(i, 1);
        res.json(200, {message: 'User deleted!'});
      }
    }
    res.json(400, {message: 'User not found'});
  }
  else {
    res.json(400, {message: 'Invalid input, try again'});
  }
};