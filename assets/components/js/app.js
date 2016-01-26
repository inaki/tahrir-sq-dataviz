var $window = $(window),
    width = $window.width(),
    height = $window.height(),
    padding = 50;

var viz = d3.select('#viz-wrapper')
      .append('svg')
      .attr('id', 'viz')
      .attr('width', width)
      .attr('height', height)
      .style('background-color', '#FFF8F1');

function renderProtests(data, gx, gy, rotation){
  var x = 0, y, gX = gx, gY = gy, xCounter = 1;
  var div = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

  var group = viz.append('g')
      .attr("transform", "translate(" + gX + "," + gY + ") rotate(" + rotation + ")");


  var dots = group.selectAll('circle')
      .data(data)
      .enter()
      .append('circle');

  dots.attr('r', 3)
      .attr('cx', function(d, i){
          if (xCounter < 4) {
  					xCounter += 1; return x;
  				} else {
  					xCounter = 2;x += 11;return x;
  				};
        })
      .attr('cy', function(d,i){
  					if (y <=39){
  						y += 11;return y;
  					} else {
  						y = 26;return y;
  					};
  			})
      .on("mouseover", function(d) {
            div.transition()
                .duration(200)
                .style("opacity", .9);
            div.html(d.Chant)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        })
      .on("mouseout", function(d) {
            div.transition()
                .duration(500)
                .style("opacity", 0);
        })
      .style('fill', function(d){return colors[d.GroupName]})
      .style('padding', 0);
      return group;
}

d3.csv('data/egypt_protest_data.csv', function(data){
  colors = {'Muslim Brotherhood': '#4C5D84', 'Civil Protesters':'#BF4B6A', 'Student': '#549E9C', 'social and workers protestors': '#E96445', 'Pro Protesters':'#A98A78'};
  var x = 0, y = 0;
  // copy of the data
  var protestByMonth = d3.nest()
      .key(function(d) { return d.Month; })
      .map(data);

  // renderProtests(object, x, y, rotation)
  renderProtests(protestByMonth[3], width/2 + 78, height/2 - 80, 0);
  renderProtests(protestByMonth[4], width/2 + 89, height/2 - 37, 30);
  renderProtests(protestByMonth[4], width/2 + 75, height/2 + 7, 60);
  renderProtests(protestByMonth[6], width/2 + 40, height/2 + 35, 90);
  renderProtests(protestByMonth[7], width/2 - 5, height/2 + 45, 120);
  renderProtests(protestByMonth[8], width/2 - 47, height/2 + 30, 150);
  renderProtests(protestByMonth[9], width/2 - 77, height/2 - 3, 180);
  renderProtests(protestByMonth[10], width/2 - 87, height/2 - 47, 210);
  renderProtests(protestByMonth[11], width/2 - 73, height/2 - 90, 240);


});
