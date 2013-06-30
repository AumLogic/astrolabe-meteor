Meteor.methods({
  os: function () {
    var os = Npm.require('os')
    return {
      freemem: os.freemem(),
      totalmem: os.totalmem(),
      uptime: os.uptime()
    }
  }
})
