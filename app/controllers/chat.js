import Ember from 'ember';

export default Ember.Controller.extend({
  startPolling: function() {
    window.setInterval(() => {
      $.getJSON('http://localhost:1337/comment')
        .then((data) => {
          this.set('model', data);
        });
    }, 1000);
  }.on('init'),

  actions: {
    addNewComment: function() {
      var message = this.get('newMessage');

      Ember.$.ajax({
        method: 'POST',
        url: 'http://localhost:1337/comment',
        data: JSON.stringify({message}),
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Authorization', 1);
        },
      }).then((data) => {
        this.model.addObject(data);
        this.set('newMessage', '');
      });
    },
  },
});
