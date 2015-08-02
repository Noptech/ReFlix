ServiceConfiguration.configurations.update({
  service: 'tmdb'
},{$set: {
  apiKey: Meteor.settings.tmdbkey
}},{
  upsert: true
})
