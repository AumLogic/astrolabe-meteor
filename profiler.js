var Clouseau = Npm.require('clouseau');

var Profiler = {
  mongoProfile: function() {
    var MongoDB = Npm.require('mongodb');
    var MongoClient = MongoDB.MongoClient;
    var MONGO_URL = process.env.MONGO_URL;
    var SYSTEM_PROFILE_COLLECTION = 'system.profile';

    MongoClient.connect(MONGO_URL, function(err, db) {
      db.collection('system.profile')
        .find({})
        .toArray(function(err, res) {
        if (err)
          error(err);
        // TODO: wrap res in a fiber to return all the logged mongo shit
        console.log(res);
      })
    });
  }
};

Meteor.methods(Profiler);
