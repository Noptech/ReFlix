Meteor.methods({
  addRating: function(mediaId, rating){
    Ratings.upsert({
      media: mediaId,
      userId: this.userId
    }, {
      $set: {
        rating: rating,
        media: mediaId,
        userId: this.userId
      }
    });
  }
});
