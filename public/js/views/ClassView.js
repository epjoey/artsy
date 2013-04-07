define(['lib/backbone'], function(Backbone) {
  return Backbone.View.extend({
    
    initialize: function() {   
      console.log('hey, im a class');   
      this.listenTo(this.model, "change", this.render);
      this.listenTo(this.model, 'destroy', this.remove);
    },
    template: _.template($('#class-item-template').html()),
    tagName: 'li',
    events: {
      'click' : 'alert'
    },
    alert: function() {
      alert('class ' + this.model.id);
    }
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
    // Remove the item, destroy the model.
    clear: function() {
      this.model.destroy();
    }    
  });
});