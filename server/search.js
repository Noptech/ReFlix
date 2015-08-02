Meteor.methods({
  search: function(queryString){
    var fut = new Future();
    tmdb.search('movie', queryString, function(err, response) {
      if (err) {
        fut.throw(err);
      } else {
        fut.return(response);
      }
    });
    return fut.wait();
  }
});
