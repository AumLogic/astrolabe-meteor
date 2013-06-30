dashboard = dash

setTimeout(dash, 500)

function dash() {
  var h1        = "<h1>meteor profler - dashboard</h1>",
      smallArea = "<div class='span4'></div>",
      largeArea = "<div class='span12'></div>";

  $('h1').css('margin', '25 25 25 25');

  document.body.innerHTML = h1 + smallArea + largeArea;

  function NumberLong (arg) {
    return arg;
  }

  function ISODate (arg) {
    return arg;
  }

  var fakeData = [{
    "op": "command",
    "ns": "meteor.$cmd",
    "command": {
      "profile": -1
    },
    "ntoreturn": 1,
    "keyUpdates": 0,
    "numYield": 0,
    "lockStats": {
      "timeLockedMicros": {
        "r": NumberLong(0),
        "w": NumberLong(13)
      },
      "timeAcquiringMicros": {
        "r": NumberLong(0),
        "w": NumberLong(13)
      }
    },
    "responseLength": 58,
    "millis": 0,
    "ts": ISODate("2013-06-29T22:52:44.347Z"),
    "client": "127.0.0.1",
    "allUsers": [],
    "user": ""
  }, {
    "op": "update",
    "ns": "meteor.game",
    "query": {},
    "updateobj": {
      "num": 28
    },
    "nscanned": 1,
    "nupdated": 1,
    "keyUpdates": 0,
    "numYield": 0,
    "lockStats": {
      "timeLockedMicros": {
        "r": NumberLong(0),
        "w": NumberLong(119)
      },
      "timeAcquiringMicros": {
        "r": NumberLong(0),
        "w": NumberLong(17)
      }
    },
    "millis": 0,
    "ts": ISODate("2013-06-29T22:52:45.507Z"),
    "client": "127.0.0.1",
    "allUsers": [],
    "user": ""
  }, {
    "op": "query",
    "ns": "meteor.game",
    "query": {},
    "ntoreturn": 0,
    "ntoskip": 0,
    "nscanned": 1,
    "keyUpdates": 0,
    "numYield": 0,
    "lockStats": {
      "timeLockedMicros": {
        "r": NumberLong(49),
        "w": NumberLong(0)
      },
      "timeAcquiringMicros": {
        "r": NumberLong(6),
        "w": NumberLong(3)
      }
    },
    "nreturned": 1,
    "responseLength": 61,
    "millis": 0,
    "ts": ISODate("2013-06-29T22:52:45.510Z"),
    "client": "127.0.0.1",
    "allUsers": [],
    "user": ""
  }, {
    "op": "query",
    "ns": "meteor.chitchat",
    "query": {},
    "ntoreturn": 0,
    "ntoskip": 0,
    "nscanned": 0,
    "keyUpdates": 0,
    "numYield": 0,
    "lockStats": {
      "timeLockedMicros": {
        "r": NumberLong(665),
        "w": NumberLong(0)
      },
      "timeAcquiringMicros": {
        "r": NumberLong(7),
        "w": NumberLong(5)
      }
    },
    "nreturned": 0,
    "responseLength": 20,
    "millis": 0,
    "ts": ISODate("2013-06-29T22:52:46.043Z"),
    "client": "127.0.0.1",
    "allUsers": [],
    "user": ""
  }, {
    "op": "query",
    "ns": "meteor.game",
    "query": {},
    "ntoreturn": 0,
    "ntoskip": 0,
    "nscanned": 1,
    "keyUpdates": 0,
    "numYield": 0,
    "lockStats": {
      "timeLockedMicros": {
        "r": NumberLong(47),
        "w": NumberLong(0)
      },
      "timeAcquiringMicros": {
        "r": NumberLong(5),
        "w": NumberLong(4)
      }
    },
    "nreturned": 1,
    "responseLength": 61,
    "millis": 0,
    "ts": ISODate("2013-06-29T22:52:46.045Z"),
    "client": "127.0.0.1",
    "allUsers": [],
    "user": ""
  }, {
    "op": "query",
    "ns": "meteor.players",
    "query": {},
    "ntoreturn": 0,
    "ntoskip": 0,
    "nscanned": 8,
    "keyUpdates": 0,
    "numYield": 0,
    "lockStats": {
      "timeLockedMicros": {
        "r": NumberLong(55),
        "w": NumberLong(0)
      },
      "timeAcquiringMicros": {
        "r": NumberLong(3),
        "w": NumberLong(4)
      }
    },
    "nreturned": 8,
    "responseLength": 707,
    "millis": 0,
    "ts": ISODate("2013-06-29T22:52:46.045Z"),
    "client": "127.0.0.1",
    "allUsers": [],
    "user": ""
  }, {
    "op": "update",
    "ns": "meteor.game",
    "query": {},
    "updateobj": {
      "num": 40
    },
    "nscanned": 1,
    "nupdated": 1,
    "keyUpdates": 0,
    "numYield": 0,
    "lockStats": {
      "timeLockedMicros": {
        "r": NumberLong(0),
        "w": NumberLong(123)
      },
      "timeAcquiringMicros": {
        "r": NumberLong(0),
        "w": NumberLong(15)
      }
    },
    "millis": 0,
    "ts": ISODate("2013-06-29T22:52:50.508Z"),
    "client": "127.0.0.1",
    "allUsers": [],
    "user": ""
  }, {
    "op": "query",
    "ns": "meteor.game",
    "query": {},
    "ntoreturn": 0,
    "ntoskip": 0,
    "nscanned": 1,
    "keyUpdates": 0,
    "numYield": 0,
    "lockStats": {
      "timeLockedMicros": {
        "r": NumberLong(38),
        "w": NumberLong(0)
      },
      "timeAcquiringMicros": {
        "r": NumberLong(5),
        "w": NumberLong(3)
      }
    },
    "nreturned": 1,
    "responseLength": 61,
    "millis": 0,
    "ts": ISODate("2013-06-29T22:52:50.509Z"),
    "client": "127.0.0.1",
    "allUsers": [],
    "user": ""
  }, {
    "op": "update",
    "ns": "meteor.game",
    "query": {},
    "updateobj": {
      "num": 116
    },
    "nscanned": 1,
    "nupdated": 1,
    "keyUpdates": 0,
    "numYield": 0,
    "lockStats": {
      "timeLockedMicros": {
        "r": NumberLong(0),
        "w": NumberLong(127)
      },
      "timeAcquiringMicros": {
        "r": NumberLong(0),
        "w": NumberLong(14)
      }
    },
    "millis": 0,
    "ts": ISODate("2013-06-29T22:52:55.510Z"),
    "client": "127.0.0.1",
    "allUsers": [],
    "user": ""
  }, {
    "op": "query",
    "ns": "meteor.game",
    "query": {},
    "ntoreturn": 0,
    "ntoskip": 0,
    "nscanned": 1,
    "keyUpdates": 0,
    "numYield": 0,
    "lockStats": {
      "timeLockedMicros": {
        "r": NumberLong(41),
        "w": NumberLong(0)
      },
      "timeAcquiringMicros": {
        "r": NumberLong(5),
        "w": NumberLong(4)
      }
    },
    "nreturned": 1,
    "responseLength": 61,
    "millis": 0,
    "ts": ISODate("2013-06-29T22:52:55.511Z"),
    "client": "127.0.0.1",
    "allUsers": [],
    "user": ""
  }, {
    "op": "query",
    "ns": "meteor.chitchat",
    "query": {},
    "ntoreturn": 0,
    "ntoskip": 0,
    "nscanned": 0,
    "keyUpdates": 0,
    "numYield": 0,
    "lockStats": {
      "timeLockedMicros": {
        "r": NumberLong(529),
        "w": NumberLong(0)
      },
      "timeAcquiringMicros": {
        "r": NumberLong(7),
        "w": NumberLong(6)
      }
    },
    "nreturned": 0,
    "responseLength": 20,
    "millis": 0,
    "ts": ISODate("2013-06-29T22:52:56.045Z"),
    "client": "127.0.0.1",
    "allUsers": [],
    "user": ""
  }, {
    "op": "query",
    "ns": "meteor.game",
    "query": {},
    "ntoreturn": 0,
    "ntoskip": 0,
    "nscanned": 1,
    "keyUpdates": 0,
    "numYield": 0,
    "lockStats": {
      "timeLockedMicros": {
        "r": NumberLong(42),
        "w": NumberLong(0)
      },
      "timeAcquiringMicros": {
        "r": NumberLong(4),
        "w": NumberLong(4)
      }
    },
    "nreturned": 1,
    "responseLength": 61,
    "millis": 0,
    "ts": ISODate("2013-06-29T22:52:56.046Z"),
    "client": "127.0.0.1",
    "allUsers": [],
    "user": ""
  }, {
    "op": "query",
    "ns": "meteor.players",
    "query": {},
    "ntoreturn": 0,
    "ntoskip": 0,
    "nscanned": 8,
    "keyUpdates": 0,
    "numYield": 0,
    "lockStats": {
      "timeLockedMicros": {
        "r": NumberLong(54),
        "w": NumberLong(0)
      },
      "timeAcquiringMicros": {
        "r": NumberLong(36),
        "w": NumberLong(4)
      }
    },
    "nreturned": 8,
    "responseLength": 707,
    "millis": 0,
    "ts": ISODate("2013-06-29T22:52:56.046Z"),
    "client": "127.0.0.1",
    "allUsers": [],
    "user": ""
  }, {
    "op": "update",
    "ns": "meteor.game",
    "query": {},
    "updateobj": {
      "num": 103
    },
    "nscanned": 1,
    "nupdated": 1,
    "keyUpdates": 0,
    "numYield": 0,
    "lockStats": {
      "timeLockedMicros": {
        "r": NumberLong(0),
        "w": NumberLong(107)
      },
      "timeAcquiringMicros": {
        "r": NumberLong(0),
        "w": NumberLong(13)
      }
    },
    "millis": 0,
    "ts": ISODate("2013-06-29T22:53:00.510Z"),
    "client": "127.0.0.1",
    "allUsers": [],
    "user": ""
  }, {
    "op": "query",
    "ns": "meteor.game",
    "query": {},
    "ntoreturn": 0,
    "ntoskip": 0,
    "nscanned": 1,
    "keyUpdates": 0,
    "numYield": 0,
    "lockStats": {
      "timeLockedMicros": {
        "r": NumberLong(34),
        "w": NumberLong(0)
      },
      "timeAcquiringMicros": {
        "r": NumberLong(4),
        "w": NumberLong(2)
      }
    },
    "nreturned": 1,
    "responseLength": 61,
    "millis": 0,
    "ts": ISODate("2013-06-29T22:53:00.511Z"),
    "client": "127.0.0.1",
    "allUsers": [],
    "user": ""
  }, {
    "op": "command",
    "ns": "meteor.$cmd",
    "command": {
      "profile": 1
    },
    "ntoreturn": 1,
    "keyUpdates": 0,
    "numYield": 0,
    "lockStats": {
      "timeLockedMicros": {
        "r": NumberLong(0),
        "w": NumberLong(26)
      },
      "timeAcquiringMicros": {
        "r": NumberLong(0),
        "w": NumberLong(12)
      }
    },
    "responseLength": 58,
    "millis": 0,
    "ts": ISODate("2013-06-29T22:53:04.481Z"),
    "client": "127.0.0.1",
    "allUsers": [],
    "user": ""
  }, {
    "op": "command",
    "ns": "meteor.$cmd",
    "command": {
      "count": "system.profile",
      "query": {},
      "fields": {}
    },
    "ntoreturn": 1,
    "keyUpdates": 0,
    "numYield": 0,
    "lockStats": {
      "timeLockedMicros": {
        "r": NumberLong(20),
        "w": NumberLong(0)
      },
      "timeAcquiringMicros": {
        "r": NumberLong(6),
        "w": NumberLong(4)
      }
    },
    "responseLength": 48,
    "millis": 0,
    "ts": ISODate("2013-06-29T23:05:53.819Z"),
    "client": "127.0.0.1",
    "allUsers": [],
    "user": ""
  }, {
    "op": "query",
    "ns": "meteor.system.profile",
    "query": {
      "query": {
        "millis": {
          "$gt": 0
        }
      },
      "orderby": {
        "$natural": -1
      }
    },
    "ntoreturn": 5,
    "ntoskip": 0,
    "nscanned": 17,
    "keyUpdates": 0,
    "numYield": 0,
    "lockStats": {
      "timeLockedMicros": {
        "r": NumberLong(125),
        "w": NumberLong(0)
      },
      "timeAcquiringMicros": {
        "r": NumberLong(3),
        "w": NumberLong(2)
      }
    },
    "nreturned": 0,
    "responseLength": 20,
    "millis": 0,
    "ts": ISODate("2013-06-29T23:05:53.819Z"),
    "client": "127.0.0.1",
    "allUsers": [],
    "user": ""
  }, {
    "op": "update",
    "ns": "meteor.game",
    "query": {},
    "updateobj": {
      "num": 102
    },
    "nscanned": 1,
    "nupdated": 1,
    "keyUpdates": 0,
    "numYield": 0,
    "lockStats": {
      "timeLockedMicros": {
        "r": NumberLong(0),
        "w": NumberLong(103)
      },
      "timeAcquiringMicros": {
        "r": NumberLong(0),
        "w": NumberLong(9)
      }
    },
    "millis": 0,
    "ts": ISODate("2013-06-29T23:05:55.655Z"),
    "client": "127.0.0.1",
    "allUsers": [],
    "user": ""
  }, {
    "op": "query",
    "ns": "meteor.game",
    "query": {},
    "ntoreturn": 0,
    "ntoskip": 0,
    "nscanned": 1,
    "keyUpdates": 0,
    "numYield": 0,
    "lockStats": {
      "timeLockedMicros": {
        "r": NumberLong(38),
        "w": NumberLong(0)
      },
      "timeAcquiringMicros": {
        "r": NumberLong(5),
        "w": NumberLong(3)
      }
    },
    "nreturned": 1,
    "responseLength": 61,
    "millis": 0,
    "ts": ISODate("2013-06-29T23:05:55.656Z"),
    "client": "127.0.0.1",
    "allUsers": [],
    "user": ""
  }
                 ];
  var svg = d3.select(".span12")
            .append("svg")
            .attr("height", "1500px")
            .attr("width", "500px");

  fakeData = fakeData
             .sort(function (a, b) { return b.responseLength - a.responseLength})
             .filter(function (d){ return d.responseLength;})

  var bars = svg.selectAll('rect')
             .data(fakeData)
             .enter()
             .append('rect')
             .attr('height', '50px')
             .attr('width', function (d) { return d.responseLength})
             .attr('fill', 'red')
             .attr('y', function (d, i) { return i * 75; })
             .attr('x', '50')

  Meteor.call('os', function (err, data) {
    var text = 'memoryUsage: ' +
      ~~ (data.freemem / 1e6) + 'mb' +
      '/ ' +
      ~~ (data.totalmem / 1e6) + 'mb'
    d3.select('body').append('div').text(text)
  })



  Meteor.call('mongoProfile', function (err, data) {
    console.log('abc' + data)
  })

}
