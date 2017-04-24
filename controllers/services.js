app.controller('ServCtrl', function($scope, $location ,authFactory){
  console.log('Services');

  AOS.init({
    duration: 1100
  })

  $scope.doLogout = () => {
    authFactory.logout()
    .then(() => $location.path('/'))
  }

  $(".menu-collapsed").click(function() {

    $(this).toggleClass("menu-expanded-inv");

  });

})
