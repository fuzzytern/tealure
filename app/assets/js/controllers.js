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
      { name:"Silver Tips", slug:"silver-tips" },
      { name:"Spring White", slug:"spring-white" },
      { name:"Black Ruby", slug:"black-ruby" },
      { name:"Himalayan Emerald", slug:"himalayan-emerald" },
      { name:"Himalayan Gold", slug:"himalayan-gold" },
      { name:"Himalayan Oolong", slug:"himalayan-oolong" }
    ];
  }]);
