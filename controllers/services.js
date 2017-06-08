app.controller('ServCtrl', function($scope, $location ,authFactory){
  console.log('Services');
  // ANIMATION CHANGES FOR NAVBAR
  $(document).ready(function(){
   let scroll_start = 0;
   let startchange = $('#startchange');
   let offset = startchange.offset();
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('#nav').css({'background-color': '#fff', 'border-bottom': '2px solid orange'});
          $('.navbar').css('padding', '5px 15px');
          $('.logo').css('height', '45px');
          $('.nav-element').css('color', '#014453');
      } else {
        $('#nav').css({'background-color': 'transparent', 'border-bottom': 'none'});
        $('.logo').css('height', '65px');
        $('.nav-element').css('color', '#fff');
        $('.navbar').css('padding', '15px');

      }
   });
  });


  $(".menu-collapsed").click(function() {
    $(this).toggleClass("menu-expanded-inv");
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
