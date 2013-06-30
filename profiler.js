var Clouseau = Npm.require('clouseau');

var Profiler = {
  mongoProfile: function() {
    // var MongoDB = Npm.require('mongodb');
    // var MongoClient = MongoDB.MongoClient;
    // var MONGO_URL = process.env.MONGO_URL;
    // var SYSTEM_PROFILE_COLLECTION = 'system.profile';

    // var future = new Npm.require('fibers/future');
    // for (var key in future) console.log(key)

    // MongoClient.connect(MONGO_URL, function(err, db) {
    //   db.collection('system.profile').find({}).toArray(function(err, data) {
    //     if (err) throw new Error(err);
    //     return future.ret(data);
    //   })
    // });

    // return future.wait();
  }
};

Meteor.methods(Profiler);
