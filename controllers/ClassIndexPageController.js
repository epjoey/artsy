define({
  baseTemplate: 'class-index-page',
  getTemplateData: function(req) {
    console.log(req)
    //var classesService = require('classService')
    return {
      bodyClass: 'class-index-page',
      title: 'Class Index',
      classes: ['easy', 'medium', 'hard']
    };
  }
});