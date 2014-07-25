module.exports = function(config){
  config.set({

    basePath : '../app',

    files : [
      'components/angular/angular.js',
      'components/angular-mocks/angular-mocks.js',
      'js/**/*.js',
      'js/**/*.spec.js',
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    port: 9001,

    singleRun: true,
  });
};
