var app = angular.module('mainApp.results',['ui.bootstrap']);

app.controller('resultsController',function($scope, $uibModal){

  var cafe = localStorage.getItem('servedCafeObject');
  cafe = JSON.parse(cafe);

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

app.controller('modalController',function($scope,$uibModalInstance){
  // TODO implement the modalController logics.
});