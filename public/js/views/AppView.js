define(['lib/backbone', 'views/ClassView'], function(Backbone, ClassView) {

  return Backbone.View.extend({
    initialize: function() { 
      console.log('hey, im AppView. I control the Dom');
      
      this.el = 'body';

      var cv = new ClassView({
        el: "#class-index"
      });
      //this.header = new Header();
      //this.contentSection = new ContentSection();
      
      // this.model.on('change:url', function(model) {
      //   console.log(model.get('url'));
      // });
      //this.listenTo(this.model, "change", this.render);
    },
    events: {

    },
    showWelcome: function() {
      this.welcomeView.show();
      this.indexView.hide();
    },
    showIndex: function() {
      this.welcomeView.show();
      this.indexView.hide();
    },
    render: function() {
      console.log('render');
    },
  });
});