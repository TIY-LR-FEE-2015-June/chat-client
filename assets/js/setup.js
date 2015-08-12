var AppTemplates = {};

Handlebars.registerHelper('from-now', function(input) {
  return moment(input).fromNow();
});
