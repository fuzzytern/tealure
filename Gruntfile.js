/* Tthing to improve potentially
 * set up testing coverage
 */

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

    express: {
      server: {
        options: {
          port: 9000,
          hostname: 'localhost',
          bases: 'app'
        }
      }
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: [ 'app/**/*.js' ],
        //tasks: ['jshint:all'],
        tasks: ['karma'],
      },
      e2e: {
        files: [ 'test/e2e/**/*.spec.js' ],
      //  tasks: ['protractor:auto', 'newer:jshint:e2e']
        tasks: ['protractor:auto']
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
         'app/**/*.js', 'Gruntfile.js'
        ]
      },
      unit: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['app/**/*.spec.js']
      },
      e2e: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['e2e/**/*.spec.js']
      }
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
      }
    },
  });

  grunt.registerTask('default', ['express', 'express-keepalive']);
  grunt.registerTask('test:unit', ['karma:unit']);
};
