Template.watchlist.helpers({
  mediaItems: function() {
    if (!Meteor.user()) return;
    var watchlist = Watchlists.findOne({userId: Meteor.user()._id});
    Session.set('watchlistId', watchlist._id);
    return watchlist ? watchlist.getMedia() : [];
  }
});

Template.watchlist.events({
  'click .removeFromList': function(event) {
    if (!Meteor.user()) return;
    var mediaId = event.target.dataset.mediaid;
    Watchlists.update(Session.get('watchlistId'), {$pull: {media: mediaId}});
  }
});
