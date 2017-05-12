app.controller('UserController', ['$scope', '$routeParams', 'BucketFactory', function($scope, $routeParams, BucketFactory){

    function current(){
      BucketFactory.current(function(data){
        $scope.user = data;
        console.log($scope.user);
      });
    }
    current(); 

    function getSingleUser(user_id){
        BucketFactory.getSingleUser(user_id, function(data){
            $scope.single_user = data;
            $scope.items = $scope.single_user.items
        })
    }
    getSingleUser($routeParams.id);




}])
