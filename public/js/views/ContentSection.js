define(['lib/backbone'], function(Backbone) {
  return Backbone.View.extend({
    initialize: function() {
      console.log('hey, im ContentSection. Router is in charge of replacing my innerhtml on navigation');
    },
    el: "#content-section",
    events: {
      'click h1': 'alert'
    },
    alert: function() {
      //alert('hey');
    },
    render: function(html) {
      this.$el.html(html);
      return this;
    }
  });
});