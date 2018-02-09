'use strict';

var grunt = require('grunt');

exports.es3_safe_recast = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },

  default_options: function(test) {
    test.expect(2);

    var actualMethods = grunt.file.read('tmp/methods.js');
    var expectedMethods = grunt.file.read('test/expected/methods.js');
    test.equal(actualMethods, expectedMethods, 'should safely recast ES3 reserved words in method calls');

    var actualParams = grunt.file.read('tmp/parameters.js');
    var expectedParams = grunt.file.read('test/expected/parameters.js');
    test.equal(actualParams, expectedParams, 'should safely recast ES3 reserved words in object literals');

    test.done();
  },

  "remove-trailing-commas": function(test) {
    test.expect(1);

    var actualParams = grunt.file.read('tmp/parameters-no-tc.js');
    var expectedParams = grunt.file.read('test/expected/parameters-no-tc.js');
    test.equal(actualParams, expectedParams, 'should safely recast ES3 reserved words in object literals and remove trailing commas in array/object literals');

    test.done();
  }
};
