'use strict';

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: grunt.file.readJSON('package.json').appPath || "app",
    dist: 'dist'
  };

  grunt.initConfig({
    config: appConfig, 

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: [ 'src/**/*.js,' ],
        tasks: ['newer:jshint:all'],
      },
      unit: {
        files: [ 'src/**/*.spec.js' ],
        tasks: ['newer:jshint:unit', 'karma']
      },
      e2e: {
        files: [ 'src/e2e/**/*.spec.js' ],
        tasks: ['protractor:auto', 'newer:jshint:e2e']
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
         'src/**/*.js', 'Gruntfile.js'
        ]
      },
      unit: {
        options: {
          jshintrc: 'karma/.jshintrc'
        },
        src: ['src/**/*.spec.js']
      },
      e2e: {
        options: {
          jshintrc: 'e2e/.jshintrc'
        },
        src: ['e2e/**/*.spec.js']
      }
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    },

    protractor: {
      files: ['src/e2e/**/*.js'],
      tasks: ['protractor:auto']
    }
  });
};
