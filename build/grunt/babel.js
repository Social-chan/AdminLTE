// Compile ES2015 to JS
'use strict';

module.exports = function (grunt) {
  return {
    options: {
      sourceMap: true,
      presets  : ['es2015']
    },
    dist   : {
      files: {
        'dist/js/socialchan.js' : 'build/js/src/Socialchan.js'
      }
    }
  };
};
