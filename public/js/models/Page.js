define(['lib/backbone'], function(Backbone) {
  return Backbone.Model.extend({
    defaults: {
      url:,
      contentSectionHtml:,
      models:,
      pathToViewController:
    },
    sync: function() {
      //is this the one? I never want to edit or delete the real thing on the server. 
      //I just want to get one from the server and kill the instance when the user edits anything or lets it get stale
    }
  });
});