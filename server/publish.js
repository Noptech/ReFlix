Meteor.publish('userData', function() {
  return Meteor.users.find();
});

Meteor.publish('media', function() {
  return Media.find();
});

Meteor.publish('ratings', function() {
  return Ratings.find();
});

Meteor.publish('recommendations', function() {
  return Recommendations.find();
});
