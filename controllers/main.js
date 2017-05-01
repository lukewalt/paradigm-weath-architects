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

  AOS.init({
    duration: 800
  })


  let vph = $(window).height();

  $('.main-header').height(vph)


  let duration = 2500;  // change this to change rotation time in milliseconds
  let current = 1;
  let tricker = $(".tricker");
  let height = tricker.height();
  let number = tricker.children().length;
  let first = tricker.children().first();

  const banner = setInterval(function() {
    let interv = current * -1 * height;
    first.css("margin-top", interv + "px");
    if (current == number) {
      first.css("margin-top", "0px");
      current = 1;
    } else {
      current++;
    }
  }, duration);

  $('document').on('load', banner)



})
