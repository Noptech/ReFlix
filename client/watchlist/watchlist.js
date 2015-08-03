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
  },
  'click .toggleAvailability': function() {
    var type = event.target.dataset.type;
    if (type === 'netflix') {
      Media.update(this._id, {$set: {availableNetflix: !this.availableNetflix}});
    } else if (type === 'torrent') {
      Media.update(this._id, {$set: {availableTorrent: !this.availableTorrent}});
    }
  },
  'click .recommend': function() {
    Recommendations.insert({
      receiverId: Meteor.user()._id,
      media: this._id
    });
    sAlert.info('You recommended "' + this.title + '"');
  }
});
