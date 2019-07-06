const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  // Add your code below this line
  .style("height", (d) => (10*d + "px"))
  .style("margin", 2 + "px");