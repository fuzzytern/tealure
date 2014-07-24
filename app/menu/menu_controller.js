'use strict'; 

angular.module('menu').controller('MenuController', ['$scope', function($scope) {
  $scope.entries = [
    { text:"Discover", link: "#" },
    { text:"Subscribe", link: "#" },
    { text:"The Story", link: "#" },
    { text:"Blog", link: "#" }
  ];
}]);
