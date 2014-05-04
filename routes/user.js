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
  else{
    res.send('Invalid input, try again');
  }
}

exports.read = function(req, res){
  res.send(JSON.stringify(users));
};

exports.update = function(req, res){
  var user = req.body.user;
  if(user){
    for(var i = 0; i < users.length; i++){
      if(users[i].id===user.id){
        users[i] = user;
        res.send('User updated!');
      }
      else{
        res.send('User not found');
      }  
    }
  }
  else {
    res.send('Invalid input, try again');
  }
};

exports.delete = function(req, res){
  var user = req.body.user;
  if(user){
    for(var i = 0; i < users.length; i++){
      if(users[i].id===user.id){
        users.splice(i);
        res.send('User deleted!');
      }
      else{
        res.send('User not found');
      }  
    }
  }
  else {
    res.send('Invalid input, try again');
  }
};