module.exports = function(config){
  config.set({

    basePath : '../app',

    files : [
      'components/angular/angular.js',
      'components/angular-mocks/angular-mocks.js',
      '**/*.js',
      '**/*.spec.js',
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
      'karma-chrome-launcher',
      'karma-jasmine'
    ],

    port: 9001,

    singleRun: true,
  });
};
