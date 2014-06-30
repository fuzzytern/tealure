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
      { name:"Silver Tips", slug:"silver-tips", options: [
        {description: "50g Lokta Box", price: "99.00" },
        {description: "40g Red Bamboo", price: "99.00"},
        {description: "40g Black Bamboo", price: "99.00"}], current_option: ""
      },
      { name:"Spring White", slug:"spring-white", options: [
        {description: "50g Lokta Box", price: "99.00" },
        {description: "40g Red Bamboo", price: "99.00"},
        {description: "40g Black Bamboo", price: "99.00"}], current_option: ""
      },
      { name:"Black Ruby", slug:"black-ruby", options: [
        {description: "50g Lokta Box", price: "99.00" },
        {description: "40g Red Bamboo", price: "99.00"},
        {description: "40g Black Bamboo", price: "99.00"}], current_option: ""
      },
      { name:"Himalayan Emerald", slug:"himalayan-emerald", options: [
        {description: "50g Lokta Box", price: "99.00" },
        {description: "40g Red Bamboo", price: "99.00"},
        {description: "40g Black Bamboo", price: "99.00"}], current_option: ""
      },
      { name:"Himalayan Gold", slug:"himalayan-gold", options: [
        {description: "50g Lokta Box", price: "99.00" },
        {description: "40g Red Bamboo", price: "99.00"},
        {description: "40g Black Bamboo", price: "99.00"}], current_option: ""
      },
      { name:"Himalayan Oolong", slug:"himalayan-oolong", options: [
        {description: "50g Lokta Box", price: "99.00" },
        {description: "40g Red Bamboo", price: "99.00"},
        {description: "40g Black Bamboo", price: "99.00"}], current_option: ""
      }
    ];
    

    /* Methods */
    $scope.select = function(product){
      $scope.selected = product;
    };
  }]);
