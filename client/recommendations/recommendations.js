Template.recommendations.helpers({
  recommendations: function() {
    return Recommendations.find({receiverId: Meteor.user()._id});
  },
  recommendationMedia: function() {
    return Media.findOne(this.media);
  },
  recommender: function() {
    return Meteor.users.findOne(this.recommenderId);
  }
});
