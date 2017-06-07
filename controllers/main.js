app.controller('MainCtrl', function ($scope, $location, authFactory){

  $(".menu-collapsed").click(function() {

    $(this).toggleClass("menu-expanded-inv");

  });

  $scope.doLogout = () => {
    authFactory.logout()
    .then(() => {
      $location.url('/')
    })
  }

  AOS.init({
    duration: 900
  })


  let vph = $(window).height();
  $('.main-header').height(vph)


  $scope.showLg = false
  console.log($(window).width());

  if ($(window).width() < 992) {
    $scope.showLg = true
    $scope.apply()
  }

  $(document).ready(function(){
  var scroll_start = 0;
  var startchange = $('#startchange');
  var offset = startchange.offset();
  if (startchange.length){
      $(document).scroll(function() {
          scroll_start = $(this).scrollTop();
          if(scroll_start > offset.top) {
              $(".navbar-fixed-top").css({'background-color':'#24363d',
                                          'opacity': '0.3'});
          } else {
              $('.navbar-fixed-top').css({'background-color':'transparent'});
          }
      });
  }
  });

  $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );


})
