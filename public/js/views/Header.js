define(['lib/backbone'], function(Backbone) {
  return Backbone.View.extend({
    initialize: function() {   
      this.el = 'header';
      console.log('hey, im header');   
      //this.listenTo(this.model, "change", this.render);
    },
    events: {
    },
    render: function() {
      console.log('render');
    }
  });
});