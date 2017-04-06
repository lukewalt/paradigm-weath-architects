app.controller('WhyCtrl', function($scope){
  console.log('why we serve');

  $scope.doLogout = () => {
    authFactory.logout()
    .then(() => $location.path('/'))
  }

})
