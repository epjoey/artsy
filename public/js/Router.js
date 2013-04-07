define(["lib/backbone", "views/BodyView"], function(Backbone, BodyView) {
  
  return Backbone.Router.extend({
    
    contentCache: {},

    initialize: function() {
      
      console.log('hey, im router');

      Backbone.history.start({pushState: true, silent: true});

      //hijack all links on page 
      $(document).on("click", "a.pushstate", function(evt) {
        var anchor = $(evt.toElement)
            , href = anchor.attr("href")
            , protocol = anchor.protocol + "//";
        
        // Ensure the protocol is not part of URL, meaning its relative.
        if (href && href.slice(0, protocol.length) !== protocol) {
          
          evt.preventDefault();
          this.navigate(href, true);
        }
      }.bind(this));       

    },

    routes: {
      '' : 'paginate',
      'classes' : 'paginate',
      'classes/:className' : 'paginate'
    },

    paginate: function() {
      var url = '/' + Backbone.history.fragment;

      if (this.contentCache[url] !== undefined) {
        console.log('getting page content for ' + url + ' from cache');
        $('#content').html(this.contentCache[url]);
        return;
      }

      console.log('making ajax call to ' + url);
      $.ajax(url, {
        data: { pushstate: true },
        success: function(html) {
          $('#content').html(html);
          this.contentCache[url] = html;
        }.bind(this)
      });      
    }
    
  });
});