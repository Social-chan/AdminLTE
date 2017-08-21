// AdminLTE Gruntfile

module.exports = function (grunt) {
  'use strict';
  //loading the configurations and grunt tasks
  var configs = require('load-grunt-config')(grunt, {
    configPath: __dirname + '/build/grunt',
    data: {
      // Metadata.
      pkg: grunt.file.readJSON('package.json'),
      banner: '/*!\n' +
      ' * Social-chan v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
      ' * Copyright 2016-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
      ' * Licensed under MIT (https://opensource.org/licenses/MIT)\n' +
      ' */\n'
    }
  });

  grunt.initConfig(configs);

  // Linting task
  grunt.registerTask('lint', ['jscs', 'eslint', 'csslint', 'bootlint'])
  // JS Build Task
  grunt.registerTask('build-js', ['babel', 'concat', 'uglify'])
  // The default task (running 'grunt' in console) is 'watch'
  grunt.registerTask('default', ['watch'])
}
