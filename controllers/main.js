app.controller('MainCtrl', function ($scope, authFactory){

  $(".menu-collapsed").click(function() {
    $(this).toggleClass("menu-expanded");
  });

  $scope.doLogout = () => {

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
