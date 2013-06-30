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
