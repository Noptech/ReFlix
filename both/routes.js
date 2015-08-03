Router.map(function() {
  this.route('home');
  this.route('add');
  this.route('watchlist');
  this.route('root', {
    path: '/',
    action: function() {
      Router.go('/home');
    }
  });
});

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});
