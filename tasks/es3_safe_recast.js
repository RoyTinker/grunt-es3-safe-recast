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

      if (file.src.length > 1) {
        console.log("Skipped " + file.src[0] + ": multiple src locations");
        return;
      }
      
      var content = grunt.file.read(file.src[0]);
      var combined = compiler.compile(content);

      if (content !== combined) {
        grunt.file.write(file.dest, combined);
        grunt.log.writeln('Saved compiled file(s) at: ' + file.dest);
      }
    });

  });

};
