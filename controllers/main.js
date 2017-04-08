app.controller('MainCtrl', function ($scope, $location, authFactory){

  $(".menu-collapsed").click(function() {

    $(this).toggleClass("menu-expanded");

  });

  $scope.doLogout = () => {
    authFactory.logout()
    .then(() => {
      $location.url('/')
    })
  }


  $scope.doLogout = () => {
    authFactory.logout()
    .then(() => $location.path('/'))
  }

})
