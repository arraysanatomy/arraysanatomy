var app = angular.module('mainApp.addCafe', []);

app.controller('addCafeController', function($scope,
  $location, $window, addCafeFactory, utils){
  $scope.cafe = {};
  $scope.tooltip_addr = "Please enter a valid address";
  $scope.tooltip_phone = "Please enter a valid number";
  $scope.show_tooltip_addr = false;
  $scope.show_tooltip_phone = false;

  $scope.getInput = function(){
    var url = window.location.hash;
    var arr = url.split('/');
    var cafeName = arr[arr.length - 1];
    $scope.cafe.name = decodeURIComponent(cafeName);
  };

  $scope.addCafe = function(){

    $scope.show_tooltip_addr = !utils.isValidAddress($scope.cafe.address);
    $scope.show_tooltip_phone = !utils.isValidPhone($scope.cafe.phone);

    if ($scope.show_tooltip_addr || $scope.show_tooltip_phone) return;

    addCafeFactory.addCafe($scope.cafe)
      .then(function(data){
        // TODO require to test add cafe name here. waiting for server.
        $window.localStorage.setItem('servedCafeObject', JSON.stringify(data));
        $location.path('/results');
      });
  };

  $scope.getInput();
});

app.factory('addCafeFactory', function($http){

  var addCafe = function(newCafe){
    var data = {};
    data.cafe = newCafe;
    return $http({
      method: 'POST',
      url: 'home/api/cafe/add',
      data: data
    })
    .then(function successCallback(response){
      return response.data;
    }, function errorCallback(response){
      return response;
    });
  };

  return {
    addCafe: addCafe
  };
});

app.factory('utils', function(){

  var validateAddress = function(addr){
    return addr && addr.trim() !== '';
  }; 

  var validatePhone = function(phone) {
    return phone && phone.trim() !== '';
  }

  return {
    isValidAddress: validateAddress,
    isValidPhone: validatePhone
  }
});