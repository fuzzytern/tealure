'use strict';

angular.module('frontpage.directives', []).directive('productInfo', function(){
  return {
    restrict: 'AE',
    templateUrl: "views/partials/product_info.html"
  };
});
