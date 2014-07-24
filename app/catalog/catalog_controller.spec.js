'use strict';

describe('Catalog Controller', function(){
  beforeEach(module('app.catalog'));

  it('should bootstrap menu controller', inject(function($controller) {
    var menuController = $controller('MenuController', { $scope: {} });
    expect(menuController).toBeDefined();
  }));

  it('should bootstrap catalog controller', inject(function($controller) {
    var catalogController = $controller('CatalogController', { $scope: {} });
    expect(catalogController).toBeDefined();
  }));
});
