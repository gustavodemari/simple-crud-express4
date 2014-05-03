var users = [];

exports.printMethodUrl = function(req, res){
  res.send(req.method+' '+req.url);
};

exports.create = function(req, res){
  var user = req.body.user;
  if(user){
    users.push(user);
    res.send('Created!');
  }
  res.send('Something went wrong :(');
}

exports.read = function(req, res){
  res.send(JSON.stringify(users));
};

exports.update = function(req, res){
  var user = req.body.user;
  for(var i = 0; i < users.length; i++){
    if(users[i].id===user.id){
      users[i] = user;
      res.send('User updated!');
    }
  }
  res.send('Something went wrong :(');
};

exports.delete = function(req, res){
  var user = req.body.user;
  for(var i = 0; i < users.length; i++){
    if(users[i].id===user.id){
      users.splice(i);
      res.send('User deleted!');
    }
  }
  res.send('Something went wrong :(');
};