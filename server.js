var express = require('express');
var app = express();
var Backbone = require('backbone');

var AppRouter = Backbone.Router.extend({
	routes: {
	  "/" : "all",
	  "/subpage" : "subpage"
	},
	all: function() {
		return 'all';
	},
	subpage: function() {
		return 'subpage';
	}
});

app.use(function(req, res){
  	var router = new AppRouter(),
		route = router.routes[req.url],
		response = null;
	if (!route) {
		response = 'not found';
	} else {
		response = router[route]();	
	}  
  	res.send(response);
});

app.listen(3000);
console.log('Listening on port 3000');