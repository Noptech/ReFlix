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
  }
});

Template.add.helpers({
  searchResults: function() {
    return Session.get('searchResults');
  }
});
