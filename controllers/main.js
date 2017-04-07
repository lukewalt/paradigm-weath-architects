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

  $scope.hide = true;

  AOS.init({
    duration: 1500,
  })

  $scope.doLogout = () => {
    authFactory.logout()
    .then(() => $location.path('/'))
  }

})
