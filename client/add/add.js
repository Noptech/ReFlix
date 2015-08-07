Template.add.events({
  'submit #searchForm': function(event) {
    event.preventDefault();
    var queryString = event.target.queryString.value;
    Meteor.call('search', queryString, function(err, response){
      if (err) {
        console.log(err);
      } else {
        Session.set('searchResults', response);
      }
    });
  },
  'click .addMedia': function(event) {
    var userWatchlist = Watchlists.findOne({userId: Meteor.user()._id});
    var userWatchlistId = userWatchlist ? userWatchlist._id
                          : Watchlists.insert({userId: Meteor.user()._id, media: []});
    var existingMedia = Media.findOne({tmdbId: this.id});
    var mediaId = existingMedia ? existingMedia._id
                                : Media.insert({
                                    tmdbId: this.id,
                                    title: this.title,
                                    isSeries: false,
                                    posterPath: this.poster_path,
                                    releaseYear: new Date(this.release_date).getFullYear()
                                  });
    Watchlists.update(userWatchlistId, {$addToSet: {media: mediaId}});
    sAlert.info('"' + this.title + '" added to watch list');
  }
});

Template.add.helpers({
  searchResults: function() {
    return Session.get('searchResults');
  },
  getYear: function(date) {
    return new Date(date).getFullYear();
  }
});
