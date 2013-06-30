var log = console.log.bind(console)
var MONGO_URL = process.env.MONGO_URL;
var exec = Npm.require('child_process').exec;

Meteor.setTimeout(function x() {
  var url = MONGO_URL.replace('mongodb://', '');
  exec('echo "db.setProfilingLevel(2)" | mongo ' + url, function () {
    _.each(arguments, log);
  })
}, 5000)

var Profiler = {
  mongoProfile: function() {
    var MongoDB = Npm.require('mongodb');
    var MongoClient = MongoDB.MongoClient;
    var SYSTEM_PROFILE_COLLECTION = 'system.profile';
    var Future = Npm.require('fibers/future')
    var fut = new Future();

    MongoClient.connect(MONGO_URL, function(err, db) {
      db.collection('system.profile').find({}).toArray(function(err, data) {
        if (err) throw new Error(err);
        return fut.ret(JSON.stringify(data));
      });
    });

    return fut.wait();
  }
};

Meteor.methods(Profiler);
