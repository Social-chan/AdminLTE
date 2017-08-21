// SASS compiler

'use strict';

module.exports = function (grunt) {
  return {
    development: {
      options: {
        precision     : 6,
        sourceComments: false,
        sourceMap     : true,
        outputStyle   : 'expanded'
      },
      files  : {
        'dist/css/socialchan.css': 'build/scss/Social-chan.scss'
      }
    },
    production : {
      options: {
        sourceComments: false,
        sourceMap     : true,
        outputStyle   : 'compressed'
      },
      files  : {
        'dist/css/socialchan.min.css': 'build/scss/Social-chan.scss'
      }
    }
  };
};
