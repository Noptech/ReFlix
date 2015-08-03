Media = new Meteor.Collection('media');
Ratings = new Meteor.Collection('ratings');
Recommendations = new Meteor.Collection('recommendations');
Watchlists = new Meteor.Collection('watchlists');

Schema = {};

Schema.User = new SimpleSchema({
    username: {
      type: String,
      regEx: /^([a-z0-9A-Z_]{1,20}\s?){1,4}$/,
      optional: false
    },
    emails: {
      type: [Object],
      // this must be optional if you also use other login services like facebook,
      // but if you use only accounts-password, then it can be required
      optional: false
    },
    'emails.$.address': {
      type: String,
      regEx: SimpleSchema.RegEx.Email,
      optional: false
    },
    'emails.$.verified': {
      type: Boolean,
      optional: true
    },
    // Add `roles` to your schema if you use the meteor-roles package.
    // Option 1: Object type
    // If you specify that type as Object, you must also specify the
    // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
    // Example:
    // Roles.addUsersToRoles(userId, ['admin'], Roles.GLOBAL_GROUP);
    // You can't mix and match adding with and without a group since
    // you will fail validation in some cases.
    roles: {
      type: Object,
      optional: true,
      blackbox: true
    },
    services: {
      type: Object,
      optional: true,
      blackbox: true
    }
});

Meteor.users.attachSchema(Schema.User);

Schema.Media = new SimpleSchema({
	title: {
		type: String,
		optional: false
	},
  isSeries: { //true = TV series, false = movie
    type: Boolean,
    optional: false,
    defaultValue: false
  },
  tmdbId: {
    type: String,
    optional: false,
    unique: true
  },
  posterPath: {
    type: String,
    optional: true
  },
  availableNetflix: {
    type: Boolean,
    optional: false,
    defaultValue: false
  },
  availableTorrent: {
    type: Boolean,
    optional: false,
    defaultValue: false
  }
});

Media.attachSchema(Schema.Media);

Schema.Ratings = new SimpleSchema({
  userId: {
    type: String,
    optional: false,
    autoValue: function() {
      return Meteor.user()._id;
    }
  },
  rating: {
    type: Number,
    optional: false,
    min: 1,
    max: 3
  }
});

Ratings.attachSchema(Schema.Ratings);

Schema.Recommendations = new SimpleSchema({
  recommenderId: {
    type: String,
    optional: false,
    autoValue: function() {
      return Meteor.user()._id;
    }
  },
  receiverId: {
    type: String,
    optional: false
  },
  media: {
    type: String,
    optional: false
  }
});

Recommendations.attachSchema(Schema.Recommendations);

Schema.Watchlists = new SimpleSchema({
  userId: {
    type: String
  },
  media: {
    type: [String] //media ID
  }
});

Watchlists.attachSchema(Schema.Watchlists);
