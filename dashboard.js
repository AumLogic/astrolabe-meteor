dashboard = dash

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

  Meteor.setInterval(query_profile, 500);

  var o = _.once(function (data) {
            data = JSON.parse(data)
            console.log(_.pluck(data, 'lockstats').filter(_.identity))
            console.log(JSON.stringify(data, null, 2))
      })

  function query_profile() {
    Meteor.call('mongoProfile', function (err, data) {
      update(JSON.parse(data))
      data && o(data)
    });
  }

  function update(data) {
    data.filter(function (d){ return d.responseLength;})
    .sort(function (a, b) { return b.responseLength - a.responseLength})

    svg.selectAll('rect')
               .data(data)
               .enter()
               .append('rect')
               .attr('height', '50px')
               .attr('width', function (d) { return d.responseLength})
               .attr('fill', 'red')
               .attr('y', function (d, i) { return i * 75; })
               .attr('x', '50')
  }


  Meteor.call('os', function (err, data) {
    var text = 'memoryUsage: ' +
      ~~ (data.freemem / 1e6) + 'mb' +
      '/ ' +
      ~~ (data.totalmem / 1e6) + 'mb'
    d3.select('body').append('div').text(text)
  })

}
