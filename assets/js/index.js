var currentUserId = localStorage.getItem('userId');

var user = new User({
  id: currentUserId,
});

if (user.id) {
  user.fetch().then(function() {
    // I'm logged in
  });
} else {
  var login = new LoginForm({
    model: user,
  });

  $('#target').html(login.render().el);
}

