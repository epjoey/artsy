define({
  getTemplateName: function(req) {
    console.log(req);
    return 'index-page';
  },
  getTemplateData: function(req) {
    return {

      bodyClass: 'index-page',
      title: 'index-page'
    };
  }
});