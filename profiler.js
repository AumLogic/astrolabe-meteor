var log = console.log.bind(console)
var MONGO_URL = process.env.MONGO_URL;
var exec = Npm.require('child_process').exec;

Meteor.setTimeout(function x() {
  var url = MONGO_URL.replace('mongodb://', '');
  exec('echo "db.setProfilingLevel(2)" | meteor mongo ' + url)

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

        var ret = []
        var data =
          data.filter(function (d){ return d.responseLength; })
          .filter(function (d){ return d.ns !== 'meteor.system.profile' })
          .map(function (obj) {
            var l = 'op ns query lock nreturned responseLength'.split(' ')
            l.unshift(obj)
            var ret = _.pick.apply(null, l);
            ret.waited = obj.lockStats.timeAcquiringMicros
            ret.waited = ret.waited.r + ret.waited.w
            ret.time = obj.lockStats.timeAcquiringMicros
            ret.time = ret.time.r + ret.time.w
            ret.count = 0
            return ret
          })
          .sort(function (a, b) { return b.time - a.time })
          .forEach(function (d, i, obj) {
            var pred = existing(d, ret)
            if (! pred) return (ret.push(d))
            pred.count++;
            pred.time += d.time
            pred.waited += d.waited
            pred.responseLength += d.responseLength
          })
        return fut.ret(JSON.stringify(ret.sort(function (a, b) { return b.time - a.time })))
      });
    });

    return fut.wait();
  }
};

Meteor.methods(Profiler);


function existing(a, collection){
  return _.find(collection,
                function (b) { return a.ns === b.ns && a.op === b.op })
}

__meteor_bootstrap__.app
.use(function (req, res, next) {
  next && next();
})
.use(Npm.require('connect').responseTime())
.use(function (req, res, next) {
  var start = new Date
  var Fiber = Npm.require('fibers')

    res.on('header', function () {
      function query() {
        reqres.insert({
          response_time: new Date - start,
          time: new Date
        }, function () { Fiber.yield(); })
      }
      Fiber(query).run();
    })
  next && next();
})
