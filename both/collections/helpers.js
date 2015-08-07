Watchlists.helpers({
  getMedia: function() {
    // TODO - refactor: https://dweldon.silvrback.com/common-mistakes
    var media = Media.find({_id: {$in: this.media}});
    return media;
  }
});

Media.helpers({
});

Meteor.users.helpers({
  getWatchlist: function() {
    var list = Watchlists.findOne({userId: Meteor.user()._id});
    if (!list) {
      var listId = Watchlists.insert({userId: Meteor.user()._id});
      list = Watchlists.findOne(listId);
    }
    return list;
  }
});
