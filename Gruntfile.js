module.exports = function(grunt) {
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        },
        ignores: ['client/app/lib/**/*.js']
      },
      all: ['server/**/*.js', 'client/**/*.js', 'Gruntfile.js']
    },
    nodemon: {
      dev: {
        script: 'index.js'
      }
    },
  });

  // Required library 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-nodemon');
  
  // Tasks
  grunt.registerTask('test', ['jshint']);

  grunt.registerTask('nodemon-dev', function (target) {
    var nodemon = grunt.util.spawn({
      cmd: 'grunt',
      grunt: true,
      args: 'nodemon'
    });
  });

  grunt.registerTask('deploy', [
    'test',
    'nodemon-dev']);
};
