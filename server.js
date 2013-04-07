var express = require('express')
  , app = express();

app.use(express.logger('dev'));
app.use(express.static(__dirname + '/'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
  var tpl = req.xhr ? 'includes/index' : 'index-page';
  res.render(tpl, {
    locals: {
      title: 'Index'
    }
  });
});

app.get('/classes', function(req, res){
  var tpl = req.xhr ? 'includes/class-index' : 'class-index-page';
  res.render(tpl, {});
});

app.get('/classes/:class', function(req, res){
  var tpl = req.xhr ? 'includes/class' : 'class-page';
  res.render(tpl, { 
    locals: {
      className: req.params.class 
    }
  });
});

app.listen(3000);
console.log('Listening on port 3000');