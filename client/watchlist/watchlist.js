Template.watchlist.helpers({
  mediaItems: function() {
    if (!Meteor.user()) return;
    return Meteor.user().getWatchlist().getMedia();
  }
});
