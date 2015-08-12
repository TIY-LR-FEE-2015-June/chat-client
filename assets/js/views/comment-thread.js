var CommentThreadItem = Marionette.ItemView.extend({
  tagName: 'li',
  template: AppTemplates['comment-thread-item'],

  /**
   * Force render to be run on sync not just change
   * @type {Object}
   */
  modelEvents: {
    sync: 'render',
  },
});

var CommentThread = Marionette.CollectionView.extend({
  tagName: 'ul',
  childView: CommentThreadItem,
});
