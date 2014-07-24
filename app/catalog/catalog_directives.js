'use strict';

angular.module('catalog').directive('productInfo', function(){
  return {
    restrict: 'AE',
    templateUrl: "catalog/partials/product_info.html"
  };
});
