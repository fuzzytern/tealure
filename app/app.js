'use strict';

angular.module('app', [
  'catalog',
  'menu',
]).config(function($logProvider){
  $logProvider.debugEnabled(true);
});
