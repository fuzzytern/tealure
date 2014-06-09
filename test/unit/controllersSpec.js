'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('frontpage.controllers'));

  it('should bootstrap menu controller', inject(function($controller) {
    //spec body
    var menuController = $controller('MenuController', { $scope: {} });
    expect(menuController).toBeDefined();
  }));

  it('should bootstrap products controller', inject(function($controller) {
    //spec body
    var productsController = $controller('ProductsController', { $scope: {} });
    expect(productsController).toBeDefined();
  }));
});
