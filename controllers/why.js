app.controller('WhyCtrl', function($scope){
  console.log('why we serve');

  $(".menu-collapsed").click(function() {

    $(this).toggleClass("menu-expanded-inv");

  });


  AOS.init({
    duration: 700
  })

  $scope.doLogout = () => {
    authFactory.logout()
    .then(() => $location.path('/'))
  }

})
