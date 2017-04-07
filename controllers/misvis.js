app.controller('MisVisCtrl', function($scope, $location, authFactory){
  
  $scope.doLogout = () => {
    authFactory.logout()
    .then(() => $location.path('/'))
  }


})
