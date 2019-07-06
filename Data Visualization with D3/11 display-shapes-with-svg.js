const w = 500;
const h = 100;

const svg = d3.select("body")
              .append("svg")
              .attr("width", w)
              .attr("height", h)
              .append('rect')
              .attr('width', 25)
              .attr('height', 100)
              .attr('x', 0)
              .attr('y', 0)