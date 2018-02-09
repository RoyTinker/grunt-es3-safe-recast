/*
 * grunt-es3-safe-recast
 * https://github.com/phpro/grunt-es3-safe-recast
 *
 * Copyright (c) 2014 Toon Verwerft
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    es3_safe_recast: {
      default_options: {
        options: {
          trailingComma: false
        },
        files: [{
          src: 'test/fixtures/methods.js',
          dest: 'tmp/methods.js',
        },{
          src: 'test/fixtures/parameters.js',
          dest: 'tmp/parameters.js',
        }],
      },
      "remove-trailing-commas": {
        options: {
          trailingComma: true
        },
        files: [{
          src: 'test/fixtures/parameters.js',
          dest: 'tmp/parameters-no-tc.js',
        }]
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'es3_safe_recast', 'es3_safe_recast:remove-trailing-commas', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
