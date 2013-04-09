define(['lib/backbone'], function(Backbone) {
  return Backbone.Model.extend({
    defaults: {
      id: null,
      //name: '...',
      timeOfDay: '...',
      dayOfWeek: '...',
      cost: '...'
    }
  });
});