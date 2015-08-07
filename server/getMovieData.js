Meteor.methods({
  getMovieData: function(tmdbId) {
    var fut = new Future();
    HTTP.call('GET', 'http://api.themoviedb.org/3/movie/' + tmdbId,
              {params: {api_key: Meteor.settings.tmdbkey}}, function(err, response){
      if( response.statusCode != 200 ){
        fut.throw(new Meteor.Error(response.data.status_code, response.data.status_message));
      } else {
        fut.return(response.data);
      }
    });
    return fut.wait();
  }
});
