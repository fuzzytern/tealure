'use strict';

angular.module('app', [
  'catalog',
  'menu',
  'subscribe',
]).config(function($logProvider){
  $logProvider.debugEnabled(true);
});
