describe('resultsController', function(){
  beforeEach(module('mainApp.results'));

  var $controller;
  var store = {};

  beforeEach(function(){
    spyOn(localStorage, 'getItem').and.callFake(function(key){
      return store[key];
    });
    spyOn(localStorage, 'setItem').and.callFake(function(key, val){
      store[key] = val;
    });

    var cafe = {
      name: 'starbucks',
      address: '611 mission Street',
      phone: '1234567890',
      menu: []
    }
    localStorage.setItem('servedCafeObject', JSON.stringify(cafe));
  });

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  var $scope = {};

  describe('$scope', function(){
    it('should be five.', function(){
      var controller = $controller('resultsController', {$scope: $scope});
      expect($scope.max).toBe(5);
      console.log($scope.max);
    });
  });  
});