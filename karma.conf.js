// Karma configuration
// Generated on Mon Apr 11 2016 10:43:22 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [ 

      // lists of libraries
      'client/app/lib/jquery/dist/jquery.js',
      'client/app/lib/datatables/media/js/jquery.dataTables.js',
      'node_modules/angular/angular.js',
      'client/app/lib/angular-bootstrap/ui-bootstrap-tpls.js',
      'client/app/lib/angular-datatables/dist/angular-datatables.js',
      'client/app/lib/bootstrap/js/bootstrap.js',

      // required for unit tests
      'node_modules/angular-mocks/angular-mocks.js',

      // list of files needed to be tested
      'client/app/addCafe/*.js',
      'client/app/landing/*.js',
      'client/app/results/*.js',
      'client/app/app.js',

      'server/tests/**/*.js'
    ],


    // list of files to exclude
    exclude: [ 'Gruntfile.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // htmlReporter: {
    //   outputDir: 'karma_html', // where to put the reports  
    //   templatePath: null, // set if you moved jasmine_template.html 
    //   focusOnFailures: true, // reports show failures on start 
    //   namedFiles: false, // name files instead of creating sub-directories 
    //   pageTitle: null, // page title for reports; browser info by default 
    //   urlFriendlyName: false, // simply replaces spaces with _ for files/dirs 
    //   reportName: 'report-summary-filename', // report summary filename; browser info by default 
     
     
    //    // experimental 
    //   preserveDescribeNesting: false, // folded suites stay folded  
    //   foldAll: false, // reports start folded (only with preserveDescribeNesting) 
    // },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
