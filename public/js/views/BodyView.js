define(['lib/backbone', 'views/HeaderView'], function(Backbone, HeaderView) {
  return Backbone.View.extend({
    initialize: function() { 
      console.log('hey, im super');
      
      this.el = 'body';
      this.headerView = new HeaderView();
      
      // this.model.on('change:url', function(model) {
      //   console.log(model.get('url'));
      // });
      //this.listenTo(this.model, "change", this.render);
    },
    events: {
    },
    render: function() {
      console.log('render');
    },
  });
});