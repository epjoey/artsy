var express = require('express');
var app = express();
var _ = require('underscore')._;
var Backbone = require('backbone');

var AppRouter = Backbone.Router.extend({
    routes: {
        "/" : "all",
        "/pages/:pageId?" : "subpage",
        "/*" : "notFound"
    },
    all: function() {
        return 'all';
    },
    subpage: function(params) {
        return 'subpage ' + params.pageId;
    },
    notFound: function() {
        return 'not found';
    }
});

var router = new AppRouter();
_.each(router.routes, function(callback, route) {
    app.get(route, function(req, res){
        res.send(router[callback](req.params));
    });
});


app.listen(3000);
console.log('Listening on port 3000');