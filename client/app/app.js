var app = angular.module('mainApp', [
   'ngRoute',
   'mainApp.results',
   'mainApp.landing',
   'mainApp.addCafe'
   ]);

app.config(function($routeProvider,$httpProvider){

  $routeProvider
    .when('/', {
      templateUrl: '/app/landing/landing.html',
      controller: 'landingController'
    })
    .when('/results', {
      templateUrl: '/app/results/results.html',
      controller: 'resultsController'
    })
    .when('/addCafe', {
      templateUrl: '/app/addCafe/addCafe.html',
      controller: 'addCafeController'
    })
    .when('/addCafe/id/:cafe', {
      templateUrl: '/app/addCafe/addCafe.html',
      controller: 'addCafeController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

