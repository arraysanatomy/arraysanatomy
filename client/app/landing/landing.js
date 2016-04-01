var app = angular.module('mainApp.landing',[]);

app.factory('landingFactory',function($http) {

    var getResults = function(cafeName){
      return $http({
        method: 'POST',
        url: '/results',
        data: cafeName
      })
      .then(function(response) {
        return response.data;
      });
  };

  return {
    getResults:getResults
  }
})

app.controller('landingController',function($scope,
 $window, $location, landingFactory){

  $scope.getResults = function() {

    landingFactory.getResults()
  }

})