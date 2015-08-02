Meteor.startup(function(){
  Future = Npm.require('fibers/future');
  tmdb = new TMDB({reload:true});
});
