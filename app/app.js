'use strict';

angular.module('frontpage', [
  'frontpage.directives',
  'frontpage.controllers'
]).config(function($logProvider){
  $logProvider.debugEnabled(true);
});
