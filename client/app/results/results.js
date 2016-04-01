var app = angular.module('mainApp.results',[]);

app.factory('resultsFactory',function($http){



  return {  };
});

app.controller('resultsController',function($scope, resultsFactory){

  var cafe = localStorage.getItem('servedCafeObject');
  $scope.cafename = cafe.name;
  $scope.rating = cafe.menu.rating;
  $scope.menuItem = cafe.menu.name;


});