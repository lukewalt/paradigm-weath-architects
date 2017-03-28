var app = angular.module('pwa', ['ngRoute']);

app.config(($routeProvider, $locationProvider) => {

  console.log('Config executing')

  // FIREBASE AUTH
  firebase.initializeApp({
    apiKey: "AIzaSyC9Ue2Xwe2AXdy1GIjvuPhiiKlMAcr2gFQ",
    authDomain: "paradigm-wealth-architects.firebaseapp.com",
    databaseURL: "https://paradigm-wealth-architects.firebaseio.com",
    storageBucket: "paradigm-wealth-architects.appspot.com",
    messagingSenderId: "499316055324"
  });


  $routeProvider
    .when('/', {
        controller: 'LoginCtrl',
        templateUrl: '/partials/login.html'
    })
    .when('/home', {
        controller: 'MainCtrl',
        templateUrl: '/partials/main.html'
    })
    .when('/why', {
        controller: 'WhyCtrl',
        templateUrl: '/partials/why.html'
    })
    .when('/how', {
        controller: 'HowCtrl',
        templateUrl: '/partials/how.html'
    })
    .when('/who', {
        controller: 'WhoCtrl',
        templateUrl: '/partials/who.html'
    })
    .otherwise({
        redirectTo: '/'
    })

})




// firebase.auth().onAuthStateChanged(() => {
//   if (firebase.auth().currentUser) {
//     // logged in
//     let email = firebase.auth().currentUser.email
//     $('#signin-page').addClass('hide')
//     $('#langing-page').removeClass('hide')
//
//     // $('.main-page h1').text(`Welcome ${email}`)
//   } else {
//     // logged out
//     $('#signin-page').removeClass('hide')
//     $('#langing-page').addClass('hide')
//   }
// })
//
// $('#signin-page form').submit((e) => {
//   let email = $('input[type="email"]').val()
//   let password = $('input[type="password"]').val()
//
//   firebase
//     .auth()
//     .signInWithEmailAndPassword(email, password)
//     .then(() => $('form')[0].reset())
//
//   e.preventDefault()
// })
//
// $('#signout-btn').click(() => firebase.auth().signOut())
