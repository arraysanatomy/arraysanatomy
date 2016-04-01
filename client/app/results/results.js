var app = angular.module('mainApp.results',[]);

app.factory('resultsFactory',function($http){

  var getResults = function(){
    return $http({
      method: 'POST',
      url: '/results'
    })
    .then(function(response) {
      return response.data
    });
  };

  return {
    getResults: getResults
  }
})

app.controller('resultsController',function($scope, resultsFactory){

  

})