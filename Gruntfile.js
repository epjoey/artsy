module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    requirejs: {
      compile: {
        options: {
          baseUrl: 'public/js',
          mainConfigFile:'public/js/client.js',
          include: 'client.js',
          out: 'public/js/build/build.js',
          optimize: 'uglify2',
          preserveLicenseComments: false,
          generateSourceMaps: true
        }
      }
    }
  });


  // !! This loads the plugin into grunt
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Default task(s).
  grunt.registerTask('default', ['requirejs']);

};


