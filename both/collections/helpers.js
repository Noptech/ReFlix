Watchlists.helpers({
  getMedia: function() {
    // TODO - refactor: https://dweldon.silvrback.com/common-mistakes
    return Media.find({_id: {$in: this.media}});
  }
});
