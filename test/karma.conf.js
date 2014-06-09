module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'app/assets/components/angular/angular.js',
      'app/assets/components/angular-mocks/angular-mocks.js',
      'app/assets/js/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
