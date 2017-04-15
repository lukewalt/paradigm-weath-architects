app.controller('HowCtrl', function($scope, $location, authFactory){
  console.log('How We Serve');



  $(".menu-collapsed").click(function() {

    $(this).toggleClass("menu-expanded");

  });

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
