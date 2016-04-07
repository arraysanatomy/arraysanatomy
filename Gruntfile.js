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
    watch: {
      scripts: {
        files: ['server/**/*.js', 'client/**/*.js', 'Gruntfile.js', '!**/node_modules/**'],
        tasks: ['jshint'],
        options: {
          spawn: false
        }
      }
    }
  });

  // Required library 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  
  grunt.registerTask('server-dev', function (target) {
    // Running nodejs in a different process and displaying output on the main console
    var nodemon = grunt.util.spawn({
         cmd: 'grunt',
         grunt: true,
         args: 'nodemon'
    });
    nodemon.stdout.pipe(process.stdout);
    nodemon.stderr.pipe(process.stderr);

    grunt.task.run([ 'watch' ]);
  });

  // Tasks
  grunt.registerTask('test', ['jshint']);

  grunt.registerTask('deploy', [
    'test',
    'server-dev']);
};


