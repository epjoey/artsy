define({
  baseTemplate: 'class-page',
  getTemplateData: function(req) {
    return {
      bodyClass: 'classes-page',
      title: 'Classes - ',
      className: req.params.className
    };
  }
});