// landing.js tests
// var results = require('../../client/app/results/results.js');
// var angular = require('angular');

describe('landingController', function(){
	beforeEach(module('mainApp.landing'));

	var $controller;

	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));

  var $scope = {};

	describe('$scope.getResults', function(){
		it('is a function', function(){
			var controller = $controller('landingController', { $scope: $scope });
			expect(typeof $scope.getResults).toBe('function');
		});

    it('should not show tool tip if user populates input box', function(){
      $scope.searchBoxModel = 'test';
      $scope.getResults($scope.searchBoxModel);
      expect($scope.showTooltip).toBe(false);
    });

    it('should show a tool tip if user doesn\'t enter anything', function(){
      $scope.searchBoxModel = '';
      $scope.getResults($scope.searchBoxModel);
      expect($scope.showTooltip).toBe(true);
    });

    
	});

});