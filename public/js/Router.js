define(["lib/backbone"], function(Backbone) {
  
  return Backbone.Router.extend({

    contentSectionByPath: {},

    initialize: function() {
      console.log('hey, im router.');

      Backbone.history.start({pushState: true, silent: true});

      this.cacheContentSectionsByPath();
      this.observePushStateAnchors();

    },

    routes: {
      '' : 'indexPage',
      'classes' : 'classesPage',
      'classes/:className' : 'classPage'
    },

    indexPage: function() {
      //todo: use promise here

      var promise = this.getContentSectionForCurrentPage();
      //promise.then(function(json){ elem.html(json.html)});

    },

    classesPage: function() {
      this.getContentSectionForCurrentPage();
      /*
        promise.then(function(json){ 
          elem.html(json.html)
          require([json.viewClass], function(ClassesView) {
            new ClassesView();
          }
        });
      */
    },

    classPage: function() {
      this.getContentSectionForCurrentPage();
      
    },

    //run through all ps links on page and and cache ajax response
    cacheContentSectionsByPath: function() {
      var anchors = $(document).find("a.pushstate")
        , length = anchors.length
        , i;

      for (i = 0; i < length; i++) {
        var anchor = anchors[i]
          , href = $(anchors[i]).attr("href");

        if (!this.isValidPushStateAnchor(anchors[i])) {
          continue;
        }

        //dont load content we are already seeing
        if (href == location.pathname) {
          continue;
        }
      
        //need to return promice from this function
        this.loadContentSectionForPath(href, function(href, html) {
          //store in cache
          this.contentSectionByPath[href] = html;
        }.bind(this));
      }

    },

    //hijack all links on page and pushstate on click
    observePushStateAnchors: function() {

      $(document).on("click", "a.pushstate", function(evt) {
        var anchor = $(evt.toElement);

        if (!this.isValidPushStateAnchor(anchor)) {
          return;
        }

        //only left mouse clicks
        if (evt.which !== 1) {
          return;
        }

        evt.preventDefault();
        this.navigate(anchor.attr('href'), true);

      }.bind(this));      
    },

    isValidPushStateAnchor: function(anchor) {
      var anchor = $(anchor)
        , href = anchor.attr("href")
        , protocol = anchor.protocol + "//";

      // Ensure the protocol is not part of URL, meaning its relative.
      if (href && href.slice(0, protocol.length) !== protocol) {
        return true;
      }
      return false;
    },


    /*
     todo: return Promise of returning JSON object like { html, data, viewClass }
     */
    getContentSectionForCurrentPage: function() {
      var path = location.pathname
        , cache = this.contentSectionByPath;

      if (cache[path]) {
        console.log('getting page content for ' + path + ' from cache');
        $('#content-section').html(cache[path]);

      } else {
        this.loadContentSectionForPath(path, function(path, html){
          $('#content-section').html(html);
          cache[path] = html;
        });
      }

      //return { html: html, data: data, viewClass, viewClass }

    },

    //return Promice instead. Promice resolution will be json { html, data, viewClass }
    loadContentSectionForPath: function(path, success) {
      console.log('making ajax call to ' + path);
      $.ajax(path, {
        success: function(html) {
          success(path, html); 
        }
      });        
    }    
    
  });
});