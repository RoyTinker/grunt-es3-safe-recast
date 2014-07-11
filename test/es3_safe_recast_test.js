'use strict';

var grunt = require('grunt');

exports.es3_safe_recast = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },

  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/compatible.js');
    var expected = grunt.file.read('test/expected/compatible.js');
    test.equal(actual, expected, 'should safely recast ES3 reserved words');

    test.done();
  },
};
