'use strict';

/* Controllers */

angular.module('frontpage.controllers', [])
  .controller('MenuController', ['$scope', function($scope) {
    $scope.entries = [
      { text:"Discover", link: "#" },
      { text:"Subscribe", link: "#" },
      { text:"The Story", link: "#" },
      { text:"Blog", link: "#" }
    ];
  }])
  .controller('ProductsController', ['$scope', function($scope) {
    /*
     * TODO - Add the following attributes
     * Name, steeping time, description, price...
     */
    $scope.products = [
      { slug:"silver-tips" },
      { slug:"spring-white" },
      { slug:"black-ruby" },
      { slug:"himalayan-emerald" },
      { slug:"himalayan-gold" },
      { slug:"himalayan-oolong" }
    ];
  }]);
