Template.watchlist.helpers({
  mediaItems: function() {
    if (!Meteor.user()) return;
    return Meteor.user().getWatchlist().getMedia();
  }
});

Template.watchlist.events({
  'click .removeFromList': function(event) {
    if (!Meteor.user()) return;
    var watchlist = Meteor.user().getWatchlist();
    Watchlists.update(watchlist._id, {$pull: {media: this._id}});
  }
});
