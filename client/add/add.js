Template.add.events({
  'submit #searchForm': function(event) {
    event.preventDefault();
    var queryString = event.target.queryString.value;
    Meteor.call('search', queryString, function(err, response){
      if (err) {
        console.log('err');
        console.log(err);
      } else {
        console.log('response');
        console.log(response);
        Session.set('searchResults', response);
      }
    });
  },
  'click .addMedia': function(event) {
    var dataset = event.target.dataset;
    console.log(dataset.tmdbid);
    console.log(dataset.title);
    var userWatchlist = Watchlists.findOne({userId: Meteor.user()._id});
    var userWatchlistId = userWatchlist ? userWatchlist._id
                          : Watchlists.insert({userId: Meteor.user()._id, media: []});
    var existingMedia = Media.findOne({tmdbId: dataset.tmdbid});
    var mediaId = existingMedia ? existingMedia._id
                                : Media.insert({
                                    tmdbId: dataset.tmdbid,
                                    title: dataset.title,
                                    isSeries: false
                                  });
    Watchlists.update(userWatchlistId, {$addToSet: {media: mediaId}});
    sAlert.info('"' + dataset.title + '" added to watch list');
  }
});

Template.add.helpers({
  searchResults: function() {
    return Session.get('searchResults');
  }
});
