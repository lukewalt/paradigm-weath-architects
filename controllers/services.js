app.controller('ServCtrl', function($scope, $location ,authFactory){
  console.log('Services');

  AOS.init({
    duration: 1100
  })

  $scope.doLogout = () => {
    authFactory.logout()
    .then(() => $location.path('/'))
  }

})
