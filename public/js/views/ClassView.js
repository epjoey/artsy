define(['lib/backbone'], function(Backbone) {
  return Backbone.View.extend({
    
    initialize: function() {   
      console.log('hey, im a class');   
      var model = Backbone.Model.extend({
        defaults: {
          name:'very hard'
        }
      });
      this.model = new model();

      console.log(this.model);
      //this.render();
      this.listenTo(this.model, "change", this.render);
      this.listenTo(this.model, 'destroy', this.remove);
    },
    template: _.template("<div><%= name %></div>"),
    events: {
      'click' : 'changeModel'
    },
    changeModel: function() {
      this.model.set('name', 'eassssy');
    },
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