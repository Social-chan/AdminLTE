// Concat compiled JS files
'use strict';

module.exports = function (grunt) {
  return {
    options : {
      stripBanners: true,
      banner      : '<%= banner %>'
    },
    adminlte: {
      src : [
        'build/js/src/Main.js'
      ],
      dest: 'build/js/src/socialchan.js'
    }
  };
};
