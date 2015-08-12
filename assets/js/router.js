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
      this.navigate('chat', {trigger: true});
    });
  },

  routes: {
    '': 'login',
    chat: 'chat',
    logout: 'logout',
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
    var allUsers = new UserList();
    var info = new ChannelInfoBar({
      model: this.user,
      collection: allUsers,
    });
    allUsers.fetch();

    $('#target').html(info.render().el);
  },

  logout: function() {
    this.user = new User();
    localStorage.removeItem('userId');
    this.navigate('', {trigger: true});
  },
});
