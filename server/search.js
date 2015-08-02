Meteor.methods({
  search: function(queryString){
    tmdb.search('movie', queryString, function(err, response) {
      if (err) {
        console.log(err);
      } else {
        console.log(response);
      }
    });
  }
});
