'use strict';

var grunt = require('grunt');

exports.es3_safe_recast = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },

  default_options: function(test) {
    test.expect(3);

    var actualMethods = grunt.file.read('tmp/methods.js');
    var expectedMethods = grunt.file.read('test/expected/methods.js');
    test.equal(actualMethods, expectedMethods, 'should safely recast ES3 reserved words in method calls');

    var actualParams = grunt.file.read('tmp/parameters.js');
    var expectedParams = grunt.file.read('test/expected/parameters.js');
    test.equal(actualParams, expectedParams, 'should safely recast ES3 reserved words in object literals');

    var actualCombined = grunt.file.read('tmp/combined.js');
    var expectedCombined = grunt.file.read('test/expected/combined.js');
    test.equal(actualCombined, expectedCombined, 'should safely recast ES3 reserved words and combine files separated by \\n');

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
