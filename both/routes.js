var subs = new SubsManager();

Router.map(function() {
  this.route('home');
  this.route('add', {
    waitOn: function() {
      return subs.subscribe('watchlists');
    }
  });
  this.route('watchlist', {
    waitOn: function() {
      return subs.subscribe('media') && subs.subscribe('watchlists');
    }
  });
  this.route('recommendations', {
    waitOn: function() {
      return subs.subscribe('watchlists') &&
             subs.subscribe('recommendationsWithMedia');
    }
  });
  this.route('root', {
    path: '/',
    action: function() {
      Router.go('/home');
    }
  });
  this.route('media', {
    path: '/media/:_id',
    waitOn: function() {
      return subs.subscribe('media');
    },
    data: function() {
      return Media.findOne(this.params._id);
    }
  })
});

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});
