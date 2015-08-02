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
    Media.insert({
      title: dataset.title,
      tmdbId: dataset.tmdbid,
      isSeries: false
    }, function(err, success) {
      if (err) sAlert.error(err);
      else sAlert.info(dataset.title + ' was added');
    });
  }
});

Template.add.helpers({
  searchResults: function() {
    return Session.get('searchResults');
  }
});
