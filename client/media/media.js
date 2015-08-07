Template.media.helpers({
  getRating: function() {
    var rating = Ratings.findOne({media: this._id, userId: Meteor.user()._id});
    return rating ? rating : {media: this._id, rating: 0};
  }
});

Template.media.events({
  'click .setRating': function(event) {
    var dataset = event.target.dataset;
    var mediaId = Template.parentData(0)._id;
    Meteor.call('addRating', mediaId, dataset.rating);
  },
  'click .clearRating': function(event) {
    var rating = Ratings.findOne({media: this._id, userId: Meteor.user()._id});
    Ratings.remove(rating._id);
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
