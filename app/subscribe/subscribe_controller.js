'use strict'; 

angular.module('subscribe').controller('SubscribeController', ['$scope', function($scope) {

  $scope.subscribeInfo = false;
  /* Methods */
  $scope.renderSubscribe = function(){
    $scope.subscribeInfo = true;
  };
  $scope.testFn= function(){
    alert("toto tata titi")
  };
}]);
