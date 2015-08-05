Meteor.publish('userData', function() {
  return Meteor.users.find();
});

Meteor.publish('media', function() {
  return Media.find();
});

Meteor.publishComposite('mediaWithRating', function(mediaId) {
  return {
    find: function() {
      return Media.find({_id: mediaId});
    },
    children: [
      {
        find: function(media) {
          return Ratings.find({media: media._id, userId: this.userId});
        }
      }
    ]
  }
});

Meteor.publish('ratings', function() {
  return Ratings.find();
});

Meteor.publish('recommendations', function() {
  return Recommendations.find();
});

Meteor.publish('watchlists', function() {
  return Watchlists.find();
});

Meteor.publishComposite('recommendationsWithMedia', {
  find: function() {
    return Recommendations.find({receiverId: this.userId});
  },
  children: [
    {
      find: function(recommendation) {
        return Media.find(recommendation.media);
      }
    },
    {
      find: function(recommendation) {
        return Meteor.users.find({_id: recommendation.recommenderId});
      }
    }
  ]
});
