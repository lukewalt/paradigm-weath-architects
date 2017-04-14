app.controller('WhoCtrl', function($scope, $location ,authFactory){
  console.log('Who');

  AOS.init({
    duration: 1100
  })


  $scope.doLogout = () => {
    authFactory.logout()
    .then(() => $location.path('/'))
  }

})
