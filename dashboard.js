dashboard = dash

function dash() {
  var h1        = "<h1>meteor profler - dashboard</h1>",
      smallArea = "<div class='span4'></div>",
      largeArea = "<div class='span12'></div>";

  document.body.innerHTML = h1 + smallArea + largeArea;

  var dataset = [10,20,30,50,50,100];

  var svg = d3.select(".span12")
              .append("svg")
              .attr("height", "500px")
              .attr("width", "500px");

  var bars = svg.selectAll('rect')
                .data(dataset)
                .

}
