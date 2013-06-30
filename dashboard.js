dashboard = dash

Meteor.setTimeout(function ( ) {
  navigator.geolocation.getCurrentPosition(ask_for_location);
}, 500)

window.location.pathname === '/profiler' ?
  (setTimeout(dash, 5000) + setTimeout(net_map, 5000)) :
  navigator.geolocation.getCurrentPosition(ask_for_location);


function dash() {
  var h1        = "<h1>meteor profiler - dashboard</h1>",
      smallArea = "<div class='span4'></div>",
      largeArea = "<div class='span8'></div>";

  document.body.innerHTML = h1 + smallArea + largeArea;
  $('h1').css('margin', '25 25 25 25');
  $('.span4').css('margin-left', '0');

  var svg = d3.select(".span4").append("svg").style("width", "500px");

  Meteor.setInterval(query_profile, 5000);

  function query_profile() {
    Meteor.call('mongoProfile', function (err, data) {
      update(JSON.parse(data))
    });
  }

  var scale = d3.scale.linear().range([0, window.innerWidth])

  pluckWith = function (name) {
    return function (obj) {
      return obj[name]
    }
  }

  function update(data) {
    window._data = data
    scale.domain([d3.min(data, pluckWith('time')),
                  d3.max(data, pluckWith('time'))
                 ])

    var sum = _.pluck(data, 'time').reduce(function (a, b) { return a + b}, 0)

    svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('height', 50)
    .attr('fill', 'steelblue')
    .attr('stroke', 'aliceblue')
    .attr('x', 25)
    .attr('rx', function (d) { return d.time / sum })
    .attr('width', function (d){ return scale(d.time) })
    .attr('y', function (d, i) { return i * 75; })
    .each(function (d, i) {
      d3.select('svg').append('text')
      .style('pointer-events', 'none')
      .attr('x', 75)
      .attr('y',  i * 75 - 45)
      .text('#' + d.count + ' ' + d.ns + '/' + d.op +
            ' total:' + d.time  +
            ' average:' + ~~ (d.time / d.count))
    })
    .on('mouseover', mouseover)
    .on('mouseout', mouseout)
  }

  Meteor.call('os', function (err, data) {
    var text = 'Ram Usage: ' +
      ~~ (data.freemem / 1e6) + 'mb' +
      '/ ' +
      ~~ (data.totalmem / 1e6) + 'mb'
    d3.select('body').append('div').text(text).style({
      position:'absolute',
      right: "25px",
      top: "25px",

    })
  })
}

function mouseover(d) {
  d3.select(this).attr('fill', d3.hsl('steelblue').brighter())
}

function mouseout(d) {
  d3.select(this).attr('fill', 'steelblue')
}

function net_map() {
  draw_world(null, world_json)

  var proj = d3.geo.equirectangular().scale(150).translate([350, 250])
    , path = d3.geo.path().projection(proj)
    , grat = d3.geo.graticule()

  function mouseover(d) {
    d3.select('.title').text(d.title + ' ' + d.year + ', '  + d.event);
  }

  function draw_world(err, world) {
    console.log(world)
    var g = d3.select('.span8').append('svg')
            .attr('class', 'map')
            .style('margin', '0px auto')
            .style('width', window.innerWidth - 450)
            .style('height', window.innerHeight * .9)
            .append('g')

    g.append('path')
    .attr('class', 'graticule noclick')
    .attr('d', path)
    .attr('fill', 'none')
    .attr('stroke', '#fff')
    .attr('stroke-width', '.5')

    g.selectAll("path")
    .data(topojson.object(world, world.objects.countries).geometries)
    .enter().append("path")
    .attr({ class: 'world'
          , d: path
          , fill: '#d7c7ad'
          , 'fill-opacity': .5
          , stroke: '#766951'
          })
  };
  draw_history();

  function draw_history() {
    Deps.autorun(function () {
      var data = human_location.find().fetch()
      forward(data || [])
    })

    function forward(data) {
      var e = d3.select('.map > g')
              .selectAll('.nil')
              .data(data.map(function (d) {
                      d.location = proj([d.lat, d.long])
                      return d
                    }))

      e.enter()
      .append('circle')
      .on('mouseover', mouseover)
      .attr({ class:'point'
            , fill: function(){ return d3.hsl(Math.random()*360, 1, 0.5) }
            , stroke: function(d){ return d.fill }
            , cx: function(d){ return d.location[0] }
            , cy: function(d){ return d.location[1] }
            , r: 15
            , opacity : 0.85
            , 'stroke-opacity': 0.5
            })
      .transition()
      .attr('r', 15)
    }
  }

  }


function ask_for_location(pos) {
  var lat = pos.coords.latitude
  var long = pos.coords.longitude
  if (lat && long) human_location.insert({lat: lat, long: long});
  }