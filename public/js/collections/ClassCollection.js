define(['lib/backbone', 'models/Class'], function(Backbone, Class) {
  return Backbone.Collection.extend({
    model: Class
  });
});