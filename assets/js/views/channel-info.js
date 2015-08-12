var ChannelInfoBar = Backbone.View.extend({
  /**
   * Current Logged in User
   * @type {User}
   */
  model: null,

  /**
   * All Users
   * @type {UserList}
   */
  collection: null,

  template: AppTemplates['channel-info'],

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    var html = this.template({
      user: this.model.toJSON(),
      users: this.collection.toJSON(),
    });
    this.$el.html(html);

    return this;
  },
});
