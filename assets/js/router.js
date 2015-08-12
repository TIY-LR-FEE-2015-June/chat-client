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
      var userId = this.user.id;
      $.ajaxPrefilter(function(options) {
        if (!options.beforeSend) {
          options.beforeSend = function(xhr) {
            xhr.setRequestHeader('Authorization', userId);
          };
        }
      });

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

    $('#header').html(info.render().el);

    var comments = new CommentStream();
    var chatInput = new CommentForm({
      collection: comments,
    });

    $('#target').html(chatInput.render().el);
  },

  logout: function() {
    this.user = new User();
    localStorage.removeItem('userId');
    this.navigate('', {trigger: true});
  },
});
