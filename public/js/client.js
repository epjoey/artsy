//script that runs in browser on page load. 

requirejs.config({
  baseUrl: '/public/js',
  shim: {
    'lib/backbone': {
      //These script dependencies should be loaded before loading
      //backbone.js
      deps: ['lib/underscore'],
      //Once loaded, use the global 'Backbone' as the
      //module value.
      exports: 'Backbone'
    },
    'lib/underscore': {
      exports: '_'
    }
  },           
  //except, if the module ID starts with "app",
  //load it from the js/app directory. paths
  //config is relative to the baseUrl, and
  //never includes a ".js" extension since
  //the paths config could be for a directory.
  paths: {
  }
});

require([ 'Router' ], function(Router) {

  var controller = new Router();

});