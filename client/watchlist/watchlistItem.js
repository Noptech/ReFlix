Template.watchlistItem.onCreated(function() {
  Meteor.call('getMovieData', this.data.tmdbId, function(err, response) {
    if (err) {
      console.log(err);
    } else {
      Session.set(response.id, response);
    }
  });
});

Template.watchlistItem.helpers({
  movieData: function() {
    return Session.get(this.tmdbId);
  }
});

Template.watchlistItem.events({
  'click .removeFromList': function(event) {
    if (!Meteor.user()) return;
    var watchlist = Meteor.user().getWatchlist();
    Watchlists.update(watchlist._id, {$pull: {media: this._id}});
  }
});
