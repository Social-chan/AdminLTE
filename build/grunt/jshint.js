// Validate JS code
'use strict';

module.exports = function (grunt) {
  return {
    options: {
      jshintrc: '.jshintrc'
    },
    core   : {
      src: 'dist/js/socialchan.js'
    }
    // demo   : {
    //   src: 'dist/js/demo.js'
    // },
    // pages  : {
    //   src: 'dist/js/pages/*.js'
    // }
  };
};
