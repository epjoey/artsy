var express = require('express');
var app = express();
var _ = require('underscore')._;
var Backbone = require('backbone');

// var App = {};
// var App.routes = {
//     '/' : 'Index',
//     '/about' : 'About',
//     '/classes/:class?' : 'Class',
//     '/contact' : 'Contact'
// };

var AppRouter = Backbone.Router.extend({
    controllers: {
        index : {
            backbone: "/",
            express: "/"
        },
        subpage : {
            backbone: "/pages/:pageId?",
            express: "/pages/:pageId?"
        },
        notFound : {
            backbone: "/pages/:pageId?",
            express: "/pages/:pageId?"
        }
    },
    initialize: function(){
        _.each(this.controllers, function(routes, controller) {
            this.route(routes.backbone, controller); 
        });
    },
    index: function() {
        return 'index';
    },
    subpage: function(pageId) {
        return 'subpage ' + pageId;
    },
    notFound: function() {
        return 'not found';
    }
});

var controllers = AppRouter.controllers;
console.log(controllers);
// _.each(routes, function(controllerName, route) {
//     app.get(route, function(req, res){
//         var controller = new App.controllers.controllerName(req.params);
//         res.send(controller.getTemplate());
//     });
// });

app.listen(3000);
console.log('Listening on port 3000');