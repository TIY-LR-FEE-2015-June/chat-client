var login = new LoginForm({
  model: new User(),
});

$('#target').html(login.render().el);
