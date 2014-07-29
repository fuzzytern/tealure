'use strict';

describe('Subscribe Controller', function(){
  beforeEach(module('subscribe'));

  it('should bootstrap subscribe controller', inject(function($controller) {
    var subscribeController = $controller('SubscribeController', { $scope: {} });
    expect(subscribeController).toBeDefined();
  }));

  xit('should display message on subscribe');
});
