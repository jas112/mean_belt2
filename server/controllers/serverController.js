var mongoose = require('mongoose');
var User = mongoose.model('User');
var Item = mongoose.model('Item');


var bcrypt = require('bcryptjs');

module.exports = {

  login: function(req, res){
    console.log(req.body.name);
    User.findOne({name: req.body.name}, function(err, data){
      if (data == null){
        var user = new User(req.body);
        user.save(function(err, data){
          if (err){
            res.status(400).send("User did not save.");
          }
          else{
            req.session.user = data;
            console.log("Server Controller line 16:", req.session.user);
            res.sendStatus(200);
          }
        })
      }
      else{
        req.session.user = data;
        res.sendStatus(200);
      }
    })
  },
  current: function(req, res){
    if(req.session.user){
      res.json(req.session.user);
    }
  },
  logout: function (req, res){
    req.session.destroy();
    res.redirect('/')
  },
  loggedUser: function(req, res){
    res.json(req.session.user);
  },
  getUsers: function(req,res){
    console.log('getting users...');
    User.find({}, function(err, data){
      if(err){
        res.status(400).send("Operation Failed.")
      }
      else{
        res.json(data);
      }
    })
  },
  getloggedUser: function(req,res){
    User.findOne({_id: req.session.user._id}).populate({path: 'items', populate: {path: '_user'}}).exec(function(err, user){
      if(err){
        console.log(err);
      }
      else{
        res.json(user)
      }
    })
  },
  getSingleUser: function(req,res){
    User.findOne({_id: req.params.user_id}).populate({path: 'items', populate: {path: '_user'}}).exec(function(err, user){
      if(err){
        console.log(err);
      }
      else{
        res.json(user)
      }
    })
  },
  createItem: function(req,res){
    console.log(req.body);
    var item = new Item(req.body)
    item._user = req.session.user
    item.save(function(err,item){
      if(err){
        console.log(err);
      }
      else{
        User.findOne({_id: req.session.user._id}, function(err,user){
          if(err){
            console.log(err);
          }
          else{
            console.log("Saving to User Data...");
            user.items.push(item)
            user.save(function(err,data){
              if(err){
                console.log(err);
              }
              else{
                User.findOne({_id: req.body.tag}, function(err,taggeduser){
                  if(err){
                    console.log(err);
                  }
                  else{
                    console.log("Saving to User Data...");
                    taggeduser.items.push(item)
                    taggeduser.save(function(err,data){
                      if(err){
                        console.log(err);
                      }
                      else{
                        res.sendStatus(200);
                      }
                    })
                  }
                })
              }
            })
          }
        })
      }
    })
  },
  getItems: function(req,res){
    console.log('getting items...');
    Item.find({}, function(err, data){
      if(err){
        res.status(400).send("Operation Failed.")
      }
      else{
        res.json(data);
      }
    })
  },
}
