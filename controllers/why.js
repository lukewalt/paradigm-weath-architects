app.controller('WhyCtrl', function($scope){
  console.log('why we serve');

  AOS.init({
    duration: 1100
  })

  $scope.doLogout = () => {
    authFactory.logout()
    .then(() => $location.path('/'))
  }

})
