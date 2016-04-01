var app = angular.module('mainApp.results',[]);

// app.factory('resultsFactory',function($http){



//   return {  };
// });

app.controller('resultsController',function($scope){

  var cafe = localStorage.getItem('servedCafeObject');
  cafe = JSON.parse(cafe);
  // $scope.cafename = cafe.name;
  // $scope.rating = cafe.menu.rating;
  // $scope.menuItem = cafe.menu.name;
  $scope.menu = cafe.menu;
  //"menu":[{"item":"Latte","rating":3},{"item":"White Chocolate Mocha","rating":5},{"item":"Earl Grey Tea","rating":4},{"item":"Flat white","rating":4},{"item":"Mocha Frapucinno","rating":2}]}


});