var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 50
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

d3.csv("assets/data/data.csv").then(function(CensusData) {
  CensusData.forEach(function(data) {
    data.age = +data.age;
    data.smokes = +data.smokes;
    // console.log(data);
  });
  const xScale = d3.scaleLinear()
  .domain(d3.extent(CensusData, d => d.age))
  .range([0, width])
  .nice();
  
  const yScale = d3.scaleLinear()
  .domain([6,d3.max(CensusData, d => d.smokes)])
  .range([height, 0])
  .nice();


