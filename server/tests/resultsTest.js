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


      it('should be \'starbucks\'', function(){
        var controller = $controller('resultsController', {$scope: $scope});
        expect($scope.cafeName).toBe('starbucks');
      });


    it('should be five.', function(){
      var controller = $controller('resultsController', {$scope: $scope});
      expect($scope.max).toBe(5);
    });

    describe('$scope.address', function(){
      it('should be a property on scope', function(){
        var controller = $controller('resultsController', {$scope: $scope});
        expect($scope.address).toBeDefined();
      });
      it('should have the proper address', function(){
        var controller = $controller('resultsController', {$scope: $scope});
        expect($scope.address).toBe('611 mission Street');
      });
    });

    describe('$scope.phone', function(){
      it('should be a property on scope', function(){
        var controller = $controller('resultsController', {$scope: $scope});
        expect($scope.phone).toBeDefined();
      });
      it('should be a string', function(){
        var controller = $controller('resultsController', {$scope: $scope});
        expect(typeof($scope.phone)).toBe('string');
      });
      it('should be the proper number', function(){
        var controller = $controller('resultsController', {$scope: $scope});
        expect($scope.phone).toBe('1234567890')
      });
    });

    describe('$scope.menu', function(){
      it('should be a property on scope', function(){
        var controller = $controller('resultsController', {$scope: $scope});
        expect($scope.menu).toBeDefined();
      });
      it('should be an array', function(){
        var controller = $controller('resultsController', {$scope: $scope});
        expect(Array.isArray($scope.menu)).toBe(true);
      });
    });




  });
});
