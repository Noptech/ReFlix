Template.media.helpers({

});

Template.media.events({
  'click .rateBtn': function(event) {
    var dataset = event.target.dataset;
    console.log(dataset.rating);
    Ratings.insert({
      media: this._id,
      rating: dataset.rating,
      userId: Meteor.user()._id
    });
  }
});
