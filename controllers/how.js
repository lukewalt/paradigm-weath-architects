app.controller('HowCtrl', function($scope, $location, authFactory){
  console.log('How We Serve');

  $scope.doLogout = () => {
    authFactory.logout()
    .then(() => {
      $location.url('/')
    })
  }

  AOS.init({
    duration: 800
  })



})
