dashboard = dash
setTimeout(extend, 499)
setTimeout(dash, 500)

function dash() {
  var h1        = "<h1>meteor profler - dashboard</h1>",
      smallArea = "<div class='span4'></div>",
      largeArea = "<div class='span12'></div>";

  document.body.innerHTML = h1 + smallArea + largeArea;
  $('h1').css('margin', '25 25 25 25');

  var svg = d3.select(".span12")
            .append("svg")
            .attr("height", "1500px")
            .attr("width", "500px");

  Meteor.setInterval(query_profile, 5000);

  function query_profile() {
    Meteor.call('mongoProfile', function (err, data) {
      update(JSON.parse(data))
    });
  }

  scale = d3.scale.linear().range([0, window.innerWidth])

  pluckWith = function (name) {
    return function (obj) {
      return obj[name]
    }
  }

  function update(data) {
    window._data = data

    scale.domain([d3.min(data, pluckWith('responseLength')),
                  d3.max(data, pluckWith('responseLength'))
                 ])

    svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('height', 50)
    .attr('fill', 'steelblue')
    .attr('stroke', 'aliceblue')
    .attr('x', 50)
    .attr('width', function (d){ return scale(d.responseLength) })
    .attr('y', function (d, i) { return i * 75; })
    .each(function (d, i) {
      d3.select('svg').append('text')
      .attr('x', scale(d.responseLength) + 50)
      .attr('y',  i * 75 - 45)
      .text(d.count + ' ' + d.ns + '/' + d.op + ' ' + d.responseLength + ' '
            + ~~ (d.time / d.count)
           )
    })
    .on('mouseover', mouseover)
    .on('mouseout', mouseout)
  }

  Meteor.call('os', function (err, data) {
    var text = 'memoryUsage: ' +
      ~~ (data.freemem / 1e6) + 'mb' +
      '/ ' +
      ~~ (data.totalmem / 1e6) + 'mb'
    d3.select('body').append('div').text(text)
  })
}


function extend(){
  console.log('extending')
  d3.selection.prototype.size = function () {
    var n = 0;
    this.each(function () { n++ })
      return n
  }

  d3.selection.prototype.tooltip = function (options) {
    if (this.size() > 1)
      this.each(function () { d3.select(this).tooltip(options) })

        var self = this
          , node = this.node()
          , whxh = node.getBoundingClientRect()
          , data = 'bounce wind gummy bounce trampoline abc def no no no abc'
                   .split(' ')

    var t = d3.select('body')
            .append('div')
            .attr('class', 'tooltip')
            .style('top', whxh.top - 75 + 'px')
            .style('left', whxh.left - 75 + 'px')

    t.append('span')
    .attr('class', 'title')
    .text('type')

    t.append('ul')
    .style('overflow', 'scroll')
    .style('height', '100px')
    .selectAll('li')
    .data(data)
    .enter().append('li')
    .text(function (d) { return d })
    .on('click', function (d) { t.remove(); self.datum().world = d })

    t.append('div')
    .attr('class', 'arrow')
    .style({})
  }
}

function mouseover(d) {
  d3.select(this).attr('fill', 'aliceblue')
}

function mouseout(d) {
  d3.select(this).attr('fill', 'steelblue')
}

function net_map() {
  d3.json('/world.json', draw_world)
  // d3.csv('/assets/hist.js', draw_history)

  var proj = d3.geo.equirectangular().scale(275).translate([550, 400])
    , path = d3.geo.path().projection(proj)
    , grat = d3.geo.graticule()

  function mouseover(d) {
    d3.select('.title').text(d.title + ' ' + d.year + ', '  + d.event);
  }

  function draw_world(err, world) {
    console.log('omg')
    var g = d3.select('body').append('svg')
            .attr('class', 'main')
            .style('margin', '0px auto')
            .style('width', window.innerWidth + 500)
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

  function draw_history(err, hist) {
    var dates, m, to
      , from = -500

    d3.select('.main')
    .append('text')
    .attr({ fill: 'white'
          , stroke: '#333'
          , text: 0
          , class:'year'
          , y: innerHeight * 0.9
          , x: 350
          , 'text-anchor':'end'
          , text: 0
          , 'font-size': '100px'
          , 'font-family': 'Helvetica'
          })

    window.num = {}

    hist.forEach(function (d) {
      window.num[d.year] = (window.num[d.year] || 0) + 1
    })

    var x = d3.scale.linear()
            .domain([-500, 2030])
            .range([0, innerWidth])

    var y = d3.scale.pow().exponent(.7)
            .domain([0, d3.max(d3.values(num))])
            .range([innerHeight * .99, innerHeight * .8])

    var slider =
      d3.select('svg')
      .style('height', y.range()[0]  + 'px')
      .attr('class', 'slider')

    var area = d3.svg.area()
               .x(function (d) { return x(+d.year) })
               .y0(y.range()[0])
               .y1(function (d) { return y(window.num[+d.year]) })

    slider
    .append('path').datum(hist)
    .attr('class', 'slider')
    .attr('fill', 'indianred')
    .attr('d', area)

    slider
    .on('click', function () { from = ~~ x.invert(+d3.mouse(this)[0]) })
    .on('mousemove', function () {
      d3.select('line').attr('stroke-width', 2)
      .attr('transform','translate('+d3.mouse(this)[0]+',0)')
    })
    .on('mouseout', function ( ){ d3.select('line').attr('stroke-width',1) })

    slider.append('line')
    .attr('stroke', 'pink')
    .attr('y1', y.range()[0])
    .attr('y2', y.range()[1])

    d3.select('body').insert('p', '*')
    .attr('class', 'title')
    .style({ color: 'white'
           , position: 'absolute'
           , top: 475 + 'px'
           , left: 150 + 'px'
           , width: "35%"
           , 'font-size': '10px'
           , 'text-anchor': 'end'
           })

    hist = hist.sort(function(a, b) { return a.year - b.year })

    dates = hist.map(function(d) { return d.location = proj(d.location.split(' ').map(parseFloat).reverse()) || d })
            .filter(function(d) { return d < 2010 })

    function forward() {
      document.title = from = from > 2010 ? -500 : from + 1

      d3.select('line').attr('transform', 'translate(' + x(from) + ',0)')
      d3.select('.year').text(from < 0 ? '' + Math.abs(+from) + ' BC' : from)

      var e = d3.select('g')
              .selectAll('.nil')
              .data(hist.filter(function(d) { return from === +d.year }))

      e.enter()
      .append('circle')
      .on('mouseover', mouseover)
      .attr({ class:'point'
            , fill: function(){ return d3.hsl(Math.random()*360, 1, 0.5) }
            , stroke: function(d){ return d.fill }
            , cx: function(d){ return d.location[0] }
            , cy: function(d){ return d.location[1] }
            , r: 0
            , opacity : 0.85
            , 'stroke-opacity': 0.5
            })
      .transition()
      .ease('cubic')
      .duration(2500)
      .attr('opacity', 0)
      .attr('r', 15)
      .remove()
    }

    window.int = setInterval(forward, 50)
  }
}

setTimeout(net_map, 60)