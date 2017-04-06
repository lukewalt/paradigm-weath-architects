app.controller('WhoCtrl', function($scope, $location ,authFactory){
  console.log('Who');

  $scope.doLogout = () => {
    authFactory.logout()
    .then(() => $location.path('/'))
  }

})
