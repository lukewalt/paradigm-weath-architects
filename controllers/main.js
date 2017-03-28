app.controller('MainCtrl', function ($scope, hexFactory){

  hexFactory.hex()

  (function($){
    $(function(){

      $('.button-collapse').sideNav();
      $('.parallax').parallax();

    }); // end of document ready
  })(jQuery); // end of jQuery name space


})
