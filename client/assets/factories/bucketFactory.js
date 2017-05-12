app.factory('BucketFactory', ['$location', '$http', function($location, $http){
  var factory = {};

  factory.login = function(user){
    $http({
      url: '/login',
      method: 'POST',
      data: user
    }).then(function(res){
      $location.url('/dashboard')
      console.log(res);
    }, function(res){
      console.log(res);
    })
  };
  factory.current = function(callback){
    $http({
      url: '/current',
      method: 'GET'
    }).then(function(res){
      callback(res.data)
    }, function(res){
      $location.url('/')
      console.log(res);
    })
  };
  factory.getUser = function(callback){
    $http({
      url: '/user',
      method: 'GET'
    }).then(function(res){
      callback(res.data);
    }, function(res){
      console.log(res);
    })
  };
  factory.getUsers = function(callback){
    $http({
      url: '/users',
      method: 'GET'
      }).then(function(res){
        callback(res.data);
    })
  };
  factory.getItems = function(callback){
    $http({
      url: '/items',
      method: 'GET'
    }).then(function(res){
      callback(res.data);
    }, function(res){
      console.log(res)
    })
  };
  factory.createItem = function(item, callback){
    $http({
      url: '/items',
      method: 'POST',
      data: item
    }).then(function(res){
      callback();
      console.log(res);
    })
  };
  factory.getSingleUser = function(user_id, callback){
    $http({
      url: '/user/' + user_id,
      method: 'GET'
    }).then(function(res){
      callback(res.data)
    })
  }

  return factory;
}])
