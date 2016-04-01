var app = angular.module('mainApp.landing',[]);

app.factory('landingFactory',function($http) {

    var getResults = function(cafeName){
      return $http({
        method: 'POST',
        url: '/home/search',
        data: {cafe: cafeName}
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

    landingFactory.getResults($scope.searchBoxModel)
      .then(function(data) {
        $window.localStorage.setItem('servedCafeObject',data);
        $location.path('/results');
      })
      .catch(function(error){
        console.error(error)
      });
  }
});
