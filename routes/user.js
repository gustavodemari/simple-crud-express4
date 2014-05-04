//Array to store users
var users = [];

exports.printMethodUrl = function(req, res){
  res.send(req.method+' '+req.url);
};

//Creating user method
exports.create = function(req, res){
  var user = req.body.user;
  if(user){
    user.id = parseInt(user.id);
    users.push(user);
    res.send('Created!');
  }
  else{
    res.send('Invalid input, try again');
  }
}

//Reading users array method
exports.read = function(req, res){
  res.send(JSON.stringify(users));
};

//Update user info method
exports.update = function(req, res){
  var user = req.body.user;
  if(user){
    user.id = parseInt(user.id);
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

//Delete user method
exports.delete = function(req, res){
  var user = req.body.user;
  if(user){
    user.id = parseInt(user.id);
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