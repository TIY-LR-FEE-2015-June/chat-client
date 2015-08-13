var Comment = Backbone.Model.extend({
  urlRoot: 'http://localhost:1337/comment',
  defaults: {
    message: '',
    createdAt: '',
    user: {},
  },
});

var CommentStream = Backbone.Collection.extend({
  url: 'http://localhost:1337/comment',
  model: Comment,
});

export default {
  Model: Comment,
  Collection: CommentStream,
};
