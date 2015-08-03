Router.map(function() {
  this.route('home');
  this.route('add');
  this.route('watchlist', {
    waitOn: function() {
      return Meteor.subscribe('media');
    }
  });
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
