app.controller('LoginController', ['$scope', '$location', 'BucketFactory', function($scope, $location, BucketFactory){


    $scope.login= function(user){
      console.log(user);
      BucketFactory.login(user);
    }

}])
