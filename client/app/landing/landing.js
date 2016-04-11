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

  $scope.tooltip = 'Please enter valid cafe name';
  $scope.getResults = function() {
    if (!$scope.searchBoxModel || $scope.searchBoxModel.trim() === '') {
      $scope.showTooltip = true;
      return;
    } 

    $scope.showTooltip = false;
    landingFactory.getResults($scope.searchBoxModel)
      .then(function (data) {
        // if successfull callback
        $window.localStorage.setItem('servedCafeObject', JSON.stringify(data));
        $location.path('/results');
      })
      .catch(function (response){
        $location.path('/addCafe/id/' + $scope.searchBoxModel);
      });
  };
});
