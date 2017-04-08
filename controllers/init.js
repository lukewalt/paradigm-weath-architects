var app = angular.module('pwa', ['ngRoute']);

app.config(($routeProvider, $locationProvider) => {

  $locationProvider.hashPrefix('');
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
    .when('/mission', {
        controller: 'MisVisCtrl',
        templateUrl: '/partials/mission.html'
    })
    .when('/vision', {
        controller: 'MisVisCtrl',
        templateUrl: '/partials/vision.html'
    })
    .when('/philosophy', {
        controller: 'MisVisCtrl',
        templateUrl: '/partials/philosophy.html'
    })
    .when('/resources', {
        controller: 'ResrCtrl',
        templateUrl: '/partials/resources.html'
    })
    .otherwise({
        redirectTo: '/'
    })

})
