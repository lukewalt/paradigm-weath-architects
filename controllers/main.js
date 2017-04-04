app.controller('MainCtrl', function ($scope){

  // (function($){
  //   $(function(){
  //
  //     $('.button-collapse').sideNav();
  //     $('.parallax').parallax();
  //
  //   }); // end of document ready
  // })(jQuery); // end of jQuery name space

  var menu = document.querySelector(".main-nav"),
      toggle = document.querySelector(".nav-toggle"),
      body = document.getElementsByTagName('body')[0];

  function toggleToggle() {
    toggle.classList.toggle("menu-open");
  };

  function toggleMenu() {
    menu.classList.toggle("active");
    body.classList.toggle("is-active-menu");
  };

  toggle.addEventListener("click", toggleToggle, false);
  toggle.addEventListener("click", toggleMenu, false);


})
