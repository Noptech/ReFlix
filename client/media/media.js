Template.media.helpers({
  rating: function() {
    var rating = Ratings.findOne({userId: Meteor.user()._id, media: this._id});
    return rating ? rating.rating : false;
  }
});

Template.media.events({
  'click .rateBtn': function(event) {
    var dataset = event.target.dataset;
    Meteor.call('addRating', this._id, dataset.rating);
  }
});
