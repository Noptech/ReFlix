Meteor.startup(function(){
  var Future = Npm.require('fibers/future');

  tmdb = new TMDB({reload:true});
});
