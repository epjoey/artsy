define(['lib/backbone', 'views/ClassView'], function(Backbone, ClassView) {
  return Backbone.View.extend({
    initialize: function() {   
      //console.log(this.collection);
      this.listenTo(this.collection, 'reset', this.addAll);
      //this.listenTo(this.model, "change", this.render);
    },
    events: {
    },
    addAll: function() {
      this.collection.each(function(classModel){
        //console.log(classModel);
        var view = new ClassView({
          //el: this.$el.
          model: classModel
        });
      }, this);
    }
  });
});