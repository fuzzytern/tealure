var scope, controller;

beforeEach(module('subscribe'));

describe('Subscribe Controller', function(){
  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    controller = $controller('SubscribeController', {
      '$scope': scope
    });
  }));

  it('should bootstrap subscribe controller', function() {
    expect(controller).toBeDefined();
  });

  it('should create $scope.message when calling $scope.renderSubscribe', function() {
    expect(scope.message).toBeUndefined();
    scope.renderSubscribe();
    expect(scope.message).toContain('Subscription are not available just yet.');
  });
});
