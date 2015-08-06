Template.media.helpers({
  getRating: function() {
    var rating = Ratings.findOne({userId: Meteor.user()._id, media: this._id});
    var ret = rating ? rating.rating : false;
    console.log(ret);
    if (ret) {
      Session.set('rating', ret);
    }
    return ret;
  },
  ratingIndex: function() {
    return [1,2,3];
  },
  ratingGte: function(val) {
    return Session.get('rating', 0) >= val;
  }
});

Template.media.events({
  'click .rateBtn': function(event) {
    var dataset = event.target.dataset;
    Meteor.call('addRating', this._id, dataset.rating);
  }
});
