'use strict';

describe('Menu Controller', function(){
  beforeEach(module('menu'));

  it('should bootstrap menu controller', inject(function($controller) {
    var menuController = $controller('MenuController', { $scope: {} });
    expect(menuController).toBeDefined();
  }));
});
