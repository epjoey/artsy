var express = require('express')
  , app = express()
  //, _ = require('underscore')._
  //, fs = require('fs');
  //, requirejs = require('requirejs');


// requirejs.config({
//     //Pass the top-level main.js/index.js require
//     //function to requirejs so that node modules
//     //are loaded relative to the top-level JS file.
//     nodeRequire: require
// });

app.use(express.logger('dev'));
app.use(express.static(__dirname + '/'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// requirejs(['lib/jade-compile'], function(jadeCompile) {
//   //compile all public templates from 'views/templates' to client-ready javascript functions in 'public/templates'
//   jadeCompile('views/templates', 'public/templates', {
//     client: true,
//     compileDebug: true
//   });
// });



// requirejs(["routes"], function(routes){
//   _.each(routes.get, function(controller, route){
//     app.get('/' + route, function(req, res){
//       requirejs(['controllers/' + controller], function(c) {
//         res.render(c.getTemplateName(req), c.getTemplateData(req));
//       });
//     });    
//   });
// });

app.get('/', function(req, res){
  var tpl = req.query.pushstate ? 'content/index-page' : 'index-page';
  res.render(tpl, {});
});

app.get('/classes', function(req, res){
  var tpl = req.query.pushstate ? 'content/class-index-page' : 'class-index-page';
  res.render(tpl, {});
});

app.get('/classes/:class', function(req, res){
  var tpl = req.query.pushstate ? 'content/class-page' : 'class-page';
  res.render(tpl, { className: req.params.class });
});

app.listen(3000);
console.log('Listening on port 3000');