var app = angular.module('mainApp.landing',[]);

app.factory('landingFactory',function($http, $location) {

    var getResults = function(cafeName){
      var newData = {};
      newData.cafe = {};
      newData.cafe.name = cafeName;
      return $http({
        method: 'POST',
        url: '/home/search',
        data: newData
      })
      .then(function successCallback(response) {
        return response.data;
      }, function errorCallback(response){
        reject(response);
      });

  };

  return {
    getResults:getResults
  };
});

app.controller('landingController',function($scope,
 $window, $location, landingFactory){

  $scope.getResults = function() {

    landingFactory.getResults($scope.searchBoxModel)
      .then(function (data) {
        // if successfull callback
        $window.localStorage.setItem('servedCafeObject', JSON.stringify(data));
        $location.path('/results');
      })
      .catch(function (response){
        // still inside model
        // alert($scope.searchBoxModel);
        $location.path('/addCafe/id/' + $scope.searchBoxModel);
      });
  };
});
