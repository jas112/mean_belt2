app.controller('DashboardController', ['$scope', '$location', 'BucketFactory', function($scope, $location, BucketFactory){

  function current(){
    BucketFactory.current(function(data){
      $scope.user = data;
      console.log($scope.user);
    });
  }
  current();

  function getUser(){
    BucketFactory.getUser(function(data){
      $scope.logged_user = data;
      $scope.items = $scope.logged_user.items
    })
  }
  getUser();

  function getUsers(){
    BucketFactory.getUsers(function(data){
      $scope.users = data;
    })
  }
  getUsers();

  $scope.createItem= function(newItem){
    console.log(newItem);
    BucketFactory.createItem(newItem, getUser);
    $scope.items = $scope.logged_user.items
  }

}])
