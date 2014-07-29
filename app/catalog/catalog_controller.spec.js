'use strict';

describe('Catalog Controller', function(){
  beforeEach(module('catalog'));

  it('should bootstrap catalog controller', inject(function($controller) {
    var catalogController = $controller('CatalogController', { $scope: {} });
    expect(catalogController).toBeDefined();
  }));

  describe('selecting a product for purchase', function(){
    xit('shows specifications for a product', inject(function($controller) {
    }));
    xit('adds a selected item to the cart', inject(function($controller) {
    }));
  });
});
