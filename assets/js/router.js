var AppRouter = Backbone.Router.extend({
  user: null,

  initialize: function() {
    var currentUserId = localStorage.getItem('userId');

    this.user = new User({
      id: currentUserId,
    });

    if (this.user.id) {
      this.user.fetch();
    }

    this.listenTo(this.user, 'sync', function() {
      this.navigate('chat', true);
    });
  },

  routes: {
    '': 'login',
    chat: 'chat',
  },

  login: function() {
    if (this.user.id) {
      this.navigate('chat', true);
    }

    var login = new LoginForm({
      model: this.user,
    });

    $('#target').html(login.render().el);
  },

  chat: function() {
    $('#target').empty();
  },
});
