/*
 * grunt-es3-safe-recast
 * https://github.com/phpro/grunt-es3-safe-recast
 *
 * Copyright (c) 2014 Toon Verwerft
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('es3_safe_recast', 'Recasts all ECMA3 reserved words to their safe alternatives, optionally removes trailing commas', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      trailingComma: false
    });

    // The compiler
    var compiler = require('es3-safe-recast');

    // Compile all selected files:
    this.files.forEach(function (file) {
      
      var content = file.src.reduce((result, src) => {
        result.push(grunt.file.read(src));
        return result;
      },[]).join("\n");
      
      var compiled = compiler.compile(content, options);

      grunt.file.write(file.dest, compiled);
      grunt.log.writeln('Saved compiled file(s) at: ' + file.dest);
    });

  });

};
