Template.add.events({
  'submit #searchForm': function(event) {
    event.preventDefault();
    var queryString = event.target.queryString.value;
    Meteor.call('search', queryString);
  }
});

Template.add.helpers({
  searchResults: function() {
    return Session.get('searchResults');
  }
})
