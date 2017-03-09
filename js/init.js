(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


// FIREBASE AUTH

firebase.initializeApp({
  apiKey: "AIzaSyC9Ue2Xwe2AXdy1GIjvuPhiiKlMAcr2gFQ",
  authDomain: "paradigm-wealth-architects.firebaseapp.com",
  databaseURL: "https://paradigm-wealth-architects.firebaseio.com",
  storageBucket: "paradigm-wealth-architects.appspot.com",
  messagingSenderId: "499316055324"
});




firebase.auth().onAuthStateChanged(() => {
  if (firebase.auth().currentUser) {
    // logged in
    let email = firebase.auth().currentUser.email
    $('#signin-page').addClass('hide')
    $('#langing-page').removeClass('hide')

    // $('.main-page h1').text(`Welcome ${email}`)
  } else {
    // logged out
    $('#signin-page').removeClass('hide')
    $('#langing-page').addClass('hide')
  }
})

$('#signin-page form').submit((e) => {
  let email = $('input[type="email"]').val()
  let password = $('input[type="password"]').val()

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => $('form')[0].reset())

  e.preventDefault()
})

$('#signout-btn').click(() => firebase.auth().signOut())
