var app = angular.module('mainApp.addCafe', []);

app.controller('addCafeController', function($scope, 
  $location, $window){

  $scope.getInput = function(){
    var url = window.location.hash;
    var arr = url.split('/'); 
    var cafeName = arr[arr.length - 1];
    $scope.cafe = cafeName;
  }
  
  $scope.getInput();
});

app.factory('addCafeFactory', function($http){

});