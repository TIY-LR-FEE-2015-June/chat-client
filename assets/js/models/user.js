var User = Backbone.Model.extend({
  urlRoot: 'http://localhost:1337/user',
  defaults: {
    email: '',
    username: '',
    photo: '',
  },
});
