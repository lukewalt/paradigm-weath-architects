var app = angular.module('pwa', ['ngRoute']);

app.config(($routeProvider, $locationProvider) => {

  // $locationProvider.hashPrefix('');

  // FIREBASE AUTH
  firebase.initializeApp({
    apiKey: "AIzaSyC9Ue2Xwe2AXdy1GIjvuPhiiKlMAcr2gFQ",
    authDomain: "paradigm-wealth-architects.firebaseapp.com",
    databaseURL: "https://paradigm-wealth-architects.firebaseio.com",
    storageBucket: "paradigm-wealth-architects.appspot.com",
    messagingSenderId: "499316055324"
  });



  $routeProvider
    .when('/home', {
        controller: 'MainCtrl',
        templateUrl: 'partials/main.html'
    })
    .when('/why', {
        controller: 'WhyCtrl',
        templateUrl: 'partials/why.html'
    })
    .when('/how', {
        controller: 'HowCtrl',
        templateUrl: 'partials/how.html'
    })
    .when('/who', {
        controller: 'WhoCtrl',
        templateUrl: 'partials/who.html'
    })
    .when('/services', {
        controller: 'ServCtrl',
        templateUrl: 'partials/services.html'
    })
    .when('/resources', {
        controller: 'ResrCtrl',
        templateUrl: 'partials/resources.html'
    })
    .when('/disclaimer', {
        controller: 'legalCtrl',
        templateUrl: 'partials/disclaimer.html'
    })
    .when('/privacy', {
        controller: 'legalCtrl',
        templateUrl: 'partials/privacy.html'
    })
    .otherwise({
        redirectTo: '/home'
    })

})
