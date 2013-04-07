define(['lib/backbone', 
        'views/Header',
        'views/ContentSection'

        ], function(Backbone, Header, ContentSection) {

  return Backbone.View.extend({
    initialize: function() { 
      console.log('hey, im AppView. I control the Dom');
      
      this.el = 'html#app';
      this.header = new Header();
      //this.contentSection = new ContentSection();
      
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