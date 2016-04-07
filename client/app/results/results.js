var app = angular.module('mainApp.results',['ui.bootstrap']);

app.controller('resultsController',function($scope, $uibModal){

  var cafe = localStorage.getItem('servedCafeObject');
  cafe = JSON.parse(cafe);

  $scope.cafeName = cafe.name;

  $scope.address = cafe.address;

  $scope.phone = cafe.phone;

  $scope.menu = cafe.menu;

  $scope.animationsEnabled = true;
  $scope.open = function(){

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'modalContent.html',
      controller: 'modalController',
      resolve: {

      }
    });
  };
  $scope.toggleAnimation = function() {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
});

app.controller('modalController',function($scope,$uibModalInstance, addDrinkFactory){

  $scope.errorMessage = '';

  $scope.add = function(){
    addDrinkFactory.addDrink().then(function(data){
      if(data){
        $uibModalInstance.close();
      }
      else{
        //TODO: demonstrate error to user
        $scope.errorMessage = 'Server error. Check back later!'
      }
    });
  };
  $scope.cancel = function(){
    $uibModalInstance.dismiss('cancel');
  }
});

app.factory('addDrinkFactory',function($http, $location) {

    var addDrink = function(drinkName){
      var newData = {};
      //need to add newData.cafe.name for cafeName
      //need to add newData.menu[0].rating
      newData.menu = [];
      newData.menu[0].item = drinkName;
      return $http({
        method: 'POST',
        url: 'home/api/menu/add',
        data: newData
      })
      .then(function successCallback(response) {
        return response.data;
      }, function errorCallback(response){
        reject(response);
      });
  };
  return {
    addDrink: addDrink
  };
});
