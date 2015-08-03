Template.watchlist.helpers({
  mediaItems: function() {
    if (!Meteor.user()) return;
    return Meteor.user().getWatchlist().getMedia();
  }
});

Template.watchlist.events({
  'click .removeFromList': function(event) {
    if (!Meteor.user()) return;
    var mediaId = event.target.dataset.mediaid;
    var watchlist = Meteor.user().getWatchlist();
    Watchlists.update(watchlist._id, {$pull: {media: mediaId}});
  },
  'click .toggleAvailability': function(event) {
    var dataset = event.target.dataset;
    var type = dataset.type;
    if (type === 'netflix') {
      Media.update(dataset.mediaid, {$set: {availableNetflix: !dataset.currentavailability}});
    } else if (type === 'torrent') {
      Media.update(dataset.mediaid, {$set: {availableTorrent: !dataset.currentavailability}});
    }
  },
  'click .recommend': function(event) {
    var dataset = event.target.dataset;
    Recommendations.insert({
      receiverId: Meteor.user()._id,
      media: dataset.mediaid
    });
    sAlert.info('You recommended "' + dataset.title + '"');
  }
});
