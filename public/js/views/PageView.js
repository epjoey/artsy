define(['lib/backbone'], function(Backbone) {

  return Backbone.View.extend({
    
    initialize: function() { 
      console.log('hey, im AppView. I control the Dom');
      
      this.el = 'html#app';

    },

    events: {
    },

    render: function() {
      console.log('render');
    },
  });
});