module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    requirejs: {
      compile: {
        options: {
          baseUrl: ".",
          dir: "public/",
          optimize: 'uglify',
          //mainConfigFile:'./src/main.js',
          modules:[
            {
              name:'lib/backbone/backbone'
            }
          ],
          logLevel: 0,
          inlineText: true
        }
      }
    }
  });


  // !! This loads the plugin into grunt
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Default task(s).
  grunt.registerTask('default', ['requirejs']);

};


