Tracker.autorun(function () {
  Meteor.subscribe('userData');
  Meteor.subscribe('media');
  Meteor.subscribe('ratings');
  Meteor.subscribe('recommendations');
  Meteor.subscribe('watchlists');
});

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});

Meteor.startup(function () {
  sAlert.config({
    effect: 'genie',
    position: 'bottom-right',
    timeout: 2500,
    html: true,
    onRouteClose: false,
    stack: true,
    offset: 0
  });
});
