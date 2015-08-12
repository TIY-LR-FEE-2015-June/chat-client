var LoginForm = Marionette.ItemView.extend({
  model: null,

  tagName: 'form',
  template: AppTemplates.login,

  events: {
    submit: 'login',
  },

  login: function(ev) {
    ev.preventDefault();
    var _this = this;

    var username = this.$('.username-input').val();
    this.model.save({username: username}).then(function() {
      console.log(_this.model);
    });
  },
});
