app.controller('LoginCtrl', function ($scope, $location, authFactory) {

  console.log("login page");

  $scope.doLogin = () => {
    authFactory
      .login($scope.email, $scope.password)
      .then(() => {
        console.log(firebase.auth().currentUser);
        $location.url('/home')
      })
  }

})
