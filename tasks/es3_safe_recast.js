/*
 * grunt-es3-safe-recast
 * https://github.com/phpro/grunt-es3-safe-recast
 *
 * Copyright (c) 2014 Toon Verwerft
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('es3_safe_recast', 'Recasts all ECMA3 reserved words to their safe alternatives.', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({});

    // The compiler
    var compiler = require('es3-safe-recast');

    // Compile all selected files:
    this.files.forEach(function (file) {

      var combined = '';
      file.src.forEach(function(filePath) {
        var content = grunt.file.read(filePath);
        combined += compiler.compile(content);
        grunt.log.writeln('Compiled ES3 Safe Recast: "' + filePath);
      });

      grunt.file.write(file.dest, combined);
      grunt.log.writeln('Saved compiled file(s) at: ' + file.dest);
    });

  });

};
