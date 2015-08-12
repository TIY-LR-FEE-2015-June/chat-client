var CommentForm = Marionette.ItemView.extend({
  collection: null,

  tagName: 'form',
  template: AppTemplates['comment-form'],

  events: {
    submit: 'create',
  },

  create: function(ev) {
    ev.preventDefault();
    var input = this.$('.comment-input');

    var message = input.val();
    var newComment = this.collection.add({message: message});
    newComment.save().then(function() {
      input.val('');
    });
  },
});
