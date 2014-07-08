'use strict';

/* jasmine specs for controllers go here */

describe('Controllers', function(){
  beforeEach(module('frontpage.controllers'));

  it('should bootstrap menu controller', inject(function($controller) {
    var menuController = $controller('MenuController', { $scope: {} });
    expect(menuController).toBeDefined();
  }));

  it('should bootstrap products controller', inject(function($controller) {
    var productsController = $controller('ProductsController', { $scope: {} });
    expect(productsController).toBeDefined();
  }));
});
