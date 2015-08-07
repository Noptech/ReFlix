Template.media.helpers({
  ratingIndex: function() {
    return [1,2,3];
  },
  getRating: function() {
    return Ratings.findOne({media: this._id, userId: Meteor.user()._id});
  }
});

Template.media.events({
  'click .setRating': function(event) {
    var dataset = event.target.dataset;
    var mediaId = Template.parentData(0)._id;
    Meteor.call('addRating', mediaId, dataset.rating);
  }
});
