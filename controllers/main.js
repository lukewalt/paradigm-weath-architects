app.controller('MainCtrl', function ($scope){

  $(".menu-collapsed").click(function() {
    $(this).toggleClass("menu-expanded");
  });

  $scope.hide = true;


})
