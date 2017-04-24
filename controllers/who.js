app.controller('WhoCtrl', function($scope, $location ,authFactory){
  console.log('Who');

  AOS.init({
    duration: 1100
  })

  $(".menu-collapsed").click(function() {

    $(this).toggleClass("menu-expanded-inv");

  });


  $scope.doLogout = () => {
    authFactory.logout()
    .then(() => $location.path('/'))
  }

})
