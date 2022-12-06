function barGraph(div, id, data) {
  // set the dimensions and margins of the graph
  var margin1 = {top: 30, right: 30, bottom: 200, left: 60},
      width1 = 1200 - margin1.left - margin1.right,
      height1 = 500 - margin1.top - margin1.bottom;

  // append the svg object to the body of the page
  var svg1 = d3.select(div)
    .append("svg")
      .attr("width", width1 + margin1.left + margin1.right)
      .attr("height", height1 + margin1.top + margin1.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin1.left + "," + margin1.top + ")")
      .attr("id",id);

  // X axis
  var x1 = d3.scaleBand()
    .range([ 0, width1 ])
    .domain(data.map(function(d) { return d.group; }))
    .padding(0.2);
  svg1.append("g")
    .attr("transform", "translate(0," + height1 + ")")
    .call(d3.axisBottom(x1));

  // Add Y axis
  var y1 = d3.scaleLinear()
    .domain([0, 60])
    .range([ height1, 0]);
  svg1.append("g")
    .attr("class", "myYaxis")
    .call(d3.axisLeft(y1));

  var z = [svg1, x1, y1, height1, id];
  return z;
}


/// A function that create / update the plot for a given variable:
function updateBar(data, t, val) {

  var svg = t[0];
  var x = t[1];
  var y = t[2];
  var height = t[3];
  var id = t[4];

  var u = svg.selectAll("rect[id='a']")
    .data(data)

  d3.selectAll("#barExtra").html(val + " Average: " + parseInt(d3.mean(data, d => d.value)));

  u
    .enter()
    .append("rect")
    .merge(u)
    .transition()
    .duration(1000)
      .attr("x", function(d) { return x(d.group); })
      .attr("y", function(d) { return y(d.value); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.value); })
      .attr("fill", "#008CBA")
      .attr("id",id)
  svg.selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");
}

function treebar(div, file, val) {
  var margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select(div)
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
d3.csv(file, function(data) {

// X axis
var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(data.map(function(d) { return d.year; }))
  .padding(0.2);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, val])
  .range([ height, 0]);
svg.append("g")
  .call(d3.axisLeft(y));

// Bars
svg.selectAll("mybar")
  .data(data)
  .enter()
  .append("rect")
    .attr("x", function(d) { return x(d.year); })
    .attr("y", function(d) { return y(d.value); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d.value); })
    .attr("fill", "#008CBA")

})
}

function treebar2(div, file, val) {
  var margin = {top: 30, right: 30, bottom: 200, left: 60},
    width = 1200 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select(div)
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
d3.csv(file, function(data) {

// X axis
var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(data.map(function(d) { return d.CSA2010; }))
  .padding(0.2);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, val])
  .range([ height, 0]);
svg.append("g")
  .call(d3.axisLeft(y));

// Bars
svg.selectAll("mybar")
  .data(data)
  .enter()
  .append("rect")
    .attr("x", function(d) { return x(d.CSA2010); })
    .attr("y", function(d) { return y(d.aa); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d.aa); })
    .attr("fill", "#008CBA")

})
}

function treebar3(div, file, val) {
  var margin = {top: 30, right: 30, bottom: 200, left: 60},
    width = 1200 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select(div)
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
d3.csv(file, function(data) {

// X axis
var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(data.map(function(d) { return d.CSA2010; }))
  .padding(0.2);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, val])
  .range([ height, 0]);
svg.append("g")
  .call(d3.axisLeft(y));

// Bars
svg.selectAll("mybar")
  .data(data)
  .enter()
  .append("rect")
    .attr("x", function(d) { return x(d.CSA2010); })
    .attr("y", function(d) { return y(d.sw); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d.sw); })
    .attr("fill", "#008CBA")

})
}

function stackedBar(div, id) {
  // set the dimensions and margins of the graph
  var margin = {top: 10, right: 30, bottom: 200, left: 50},
      width = 1200 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  var svg = d3.select(div)
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")")
      .attr("id",id);

  // Parse the Data
  d3.csv("https://raw.githubusercontent.com/katesanders9/HCI-project/master/t1.csv", function(data) {

    // List of subgroups = header of the csv files = soil condition here
    var subgroups = data.columns.slice(1)

    // List of groups = species here = value of the first column called group -> I show them on the X axis
    var groups = d3.map(data, function(d){return(d.CSA2010)}).keys()

    // Add X axis
    var x = d3.scaleBand()
        .domain(groups)
        .range([0, width])
        .padding([0.2])
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).tickSizeOuter(0));

    // Add Y axis
    var y = d3.scaleLinear()
      .domain([0, 160])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y));

    // color palette = one color per subgroup
    var color = d3.scaleOrdinal()
      .domain(subgroups)
      .range(['#C7EFCF','#FE5F55','#EEF5DB'])

    //stack the data? --> stack per subgroup
    var stackedData = d3.stack()
      .keys(subgroups)
      (data)

    var tooltip = d3.select(div)
      .append("div")
      .attr("class", "tooltip2")
      .style("width", 150 +"px");


    // Three function that change the tooltip when user hover / move / leave a cell
    var mouseover = function(d) {
      var subgroupName = d3.select(this.parentNode).datum().key;
      var subgroupValue = d.data[subgroupName];
      tooltip
          .html("Age: " + subgroupName + "<br>" + "Value: " + parseInt(subgroupValue))
          .style('display', 'block')
    }
    var mousemove = function(d) {
      tooltip
          .style('top', (d3.event.layerY + 10) + 'px') // always 10px below the cursor
    .style('left', (d3.event.layerX + 10) + 'px'); // always 10px to the right of the mouse
    }
    var mouseleave = function(d) {
      tooltip
        .style('display', 'none')
    }

    svg.append("g")
      .selectAll("g")
      // Enter in the stack data = loop key per key = group per group
      .data(stackedData)
      .enter().append("g")
        .attr("fill", function(d) { return color(d.key); })
        .selectAll("rect")
        // enter a second time = loop subgroup per subgroup to add all rectangles
        .data(function(d) { return d; })
        .enter().append("rect")
          .attr("x", function(d) { return x(d.data.CSA2010); })
          .attr("y", function(d) { return y(d[1]); })
          .attr("height", function(d) { return y(d[0]) - y(d[1]); })
          .attr("width",x.bandwidth())
          .attr("stroke", "grey")
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)
          svg.selectAll("text")
     .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

  })
}

function pie(div) {
  var width = 450
    height = 450
    margin = 40

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin

// append the svg object to the div called 'my_dataviz'
var svg = d3.select(div)
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Create dummy data
var data = {a: 9, b: 20, c:30, d:8, e:12}

// set the color scale
var color = d3.scaleOrdinal()
  .domain(data)
  .range(d3.schemeSet2);

// Compute the position of each group on the pie:
var pie = d3.pie()
  .value(function(d) {return d.value; })
var data_ready = pie(d3.entries(data))
// Now I know that group A goes from 0 degrees to x degrees and so on.

// shape helper to build arcs:
var arcGenerator = d3.arc()
  .innerRadius(0)
  .outerRadius(radius)

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
  .selectAll('mySlices')
  .data(data_ready)
  .enter()
  .append('path')
    .attr('d', arcGenerator)
    .attr('fill', function(d){ return(color(d.data.key)) })
    .attr("stroke", "black")
    .style("stroke-width", "2px")
    .style("opacity", 0.7)

// Now add the annotation. Use the centroid method to get the best coordinates
svg
  .selectAll('mySlices')
  .data(data_ready)
  .enter()
  .append('text')
  .text(function(d){ return "grp " + d.data.key})
  .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
  .style("text-anchor", "middle")
  .style("font-size", 17)
}




function scatterGroup(div){
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select(div)
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/iris.csv", function(data) {

  // Add X axis
  var x = d3.scaleLinear()
    .domain([4, 8])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 9])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Color scale: give me a specie name, I return a color
  var color = d3.scaleOrdinal()
    .domain(["setosa", "versicolor", "virginica" ])
    .range([ "#440154ff", "#21908dff", "#fde725ff"])


  // Highlight the specie that is hovered
  var highlight = function(d){

    selected_specie = d.Species

    d3.selectAll(".dot")
      .transition()
      .duration(200)
      .style("fill", "lightgrey")
      .attr("r", 3)

    d3.selectAll("." + selected_specie)
      .transition()
      .duration(200)
      .style("fill", color(selected_specie))
      .attr("r", 7)
  }

  // Highlight the specie that is hovered
  var doNotHighlight = function(){
    d3.selectAll(".dot")
      .transition()
      .duration(200)
      .style("fill", "lightgrey")
      .attr("r", 5 )
  }

  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("class", function (d) { return "dot " + d.Species } )
      .attr("cx", function (d) { return x(d.Sepal_Length); } )
      .attr("cy", function (d) { return y(d.Petal_Length); } )
      .attr("r", 5)
      .style("fill", function (d) { return color(d.Species) } )
    .on("mouseover", highlight)
    .on("mouseleave", doNotHighlight )

})
}




function scatterH(div){
  var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select(div)
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/2_TwoNum.csv", function(data) {

  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 3000])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 400000])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Add a tooltip div. Here I define the general feature of the tooltip: stuff that do not depend on the data point.
  // Its opacity is set to 0: we don't see it by default.
  var tooltip = d3.select(div)
    .append("div")
    .attr("class", "tooltip2")



  // A function that change this tooltip when the user hover a point.
  // Its opacity is set to 1: we can now see it. Plus it set the text and position of tooltip depending on the datapoint (d)
  var mouseover = function(d) {
    tooltip
      .style("display", "block")
  }

  var mousemove = function(d) {
    tooltip
      .html(d.GrLivArea)
          .style('top', (d3.event.layerY + 10) + 'px') // always 10px below the cursor
    .style('left', (d3.event.layerX + 10) + 'px'); // always 10px to the right of the mouse
  }

  // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
  var mouseleave = function(d) {
    tooltip
      .transition()
      .duration(200)
      .style("display", "none")
  }

  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data.filter(function(d,i){return i<50})) // the .filter part is just to keep a few dots on the chart, not all of them
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.GrLivArea); } )
      .attr("cy", function (d) { return y(d.SalePrice); } )
      .attr("r", 7)
      .style("fill", "#69b3a2")
      .style("opacity", 0.3)
      .style("stroke", "white")
    .on("mouseover", mouseover )
    .on("mousemove", mousemove )
    .on("mouseleave", mouseleave )

})
}




function hist(div){
  var margin = {top: 10, right: 30, bottom: 30, left: 40},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select(div)
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// get the data
d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/1_OneNum.csv", function(data) {

  // X axis: scale and draw:
  var x = d3.scaleLinear()
      .domain([0, 1000])     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
      .range([0, width]);
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // Y axis: initialization
  var y = d3.scaleLinear()
      .range([height, 0]);
  var yAxis = svg.append("g")

  // A function that builds the graph for a specific value of bin
  function update(nBin) {

    // set the parameters for the histogram
    var histogram = d3.histogram()
        .value(function(d) { return d.price; })   // I need to give the vector of value
        .domain(x.domain())  // then the domain of the graphic
        .thresholds(x.ticks(nBin)); // then the numbers of bins

    // And apply this function to data to get the bins
    var bins = histogram(data);

    // Y axis: update now that we know the domain
    y.domain([0, d3.max(bins, function(d) { return d.length; })]);   // d3.hist has to be called before the Y axis obviously
    yAxis
        .transition()
        .duration(1000)
        .call(d3.axisLeft(y));

    // Join the rect with the bins data
    var u = svg.selectAll("rect")
        .data(bins)

    // Manage the existing bars and eventually the new ones:
    u
        .enter()
        .append("rect") // Add a new rect for each new elements
        .merge(u) // get the already existing elements as well
        .transition() // and apply changes to all of them
        .duration(1000)
          .attr("x", 1)
          .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
          .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
          .attr("height", function(d) { return height - y(d.length); })
          .style("fill", "#69b3a2")


    // If less bar in the new histogram, I delete the ones not in use anymore
    u
        .exit()
        .remove()

    }


  // Initialize with 20 bins
  update(20)


  // Listen to the button -> update if user change it
  d3.select("#nBin").on("input", function() {
    update(+this.value);
  });

});
}




function choroHover(div) {
  var svg = d3.select(div),
  width = +svg.attr("width"),
  height = +svg.attr("height");

// Map and projection
var path = d3.geoPath();
var projection = d3.geoMercator()
  .scale(140000)
  .center([-76.61,39.28])
  .translate([width / 2, height / 2]);

// Data and color scale
var data = d3.map();
var colorScale = d3.scaleThreshold()
  .domain([1, 1, 1, 70, 75, 80])
  .range(d3.schemeBlues[7]);

// Load external data and boot
d3.queue()
  .defer(d3.json, "https://raw.githubusercontent.com/katesanders9/HCI-project/master/new.geojson")
  .defer(d3.csv, "https://raw.githubusercontent.com/katesanders9/HCI-project/master/Life_Expectancy.csv", function(d) { data.set(d.OBJECTID, +d.lifexp18); })
  .await(ready);

function ready(error, topo) {

  var tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip2")
    .style("width", 120 +"px");
  var area = d3.select("#asdf")
    .append("div")
    .html("Location:")
    .style("font-weight", "normal");

    var mouseover = function(d) {
    tooltip
      .style('display', 'block');

  }

    var mousemove = function(d) {
      area
        .html("Location: " + d.properties.CSA2010)
        .style("font-weight", "bold");
      tooltip
          .html(parseInt(data.get(d.id)) + " years")
          .style('top', (d3.event.layerY + 10) + 'px') // always 10px below the cursor
    .style('left', (d3.event.layerX + 10) + 'px'); // always 10px to the right of the mouse
    }

  var mouseleave = function(d) {
    area
      .html("Location:")
      .style("font-weight", "normal");
      tooltip
        .style('display', 'none');
  }

  // Draw the map
  svg.append("g")
    .selectAll("path")
    .data(topo.features)
    .enter()
    .append("path")
      // draw each country
      .attr("d", d3.geoPath()
        .projection(projection)
      )
      // set the color of each country
      .attr("fill", function (d) {
      d.total = data.get(d.id) || 0;
        return colorScale(d.total);
      })
      .style("stroke", "transparent")
      .attr("class", function(d){ return "Country" } )
      .style("opacity", .8)
      .on("mouseover", mouseover )
      .on("mousemove", mousemove )
      .on("mouseleave", mouseleave );
    }
}

function choroHover2(div) {
  var svg = d3.select(div),
  width = +svg.attr("width"),
  height = +svg.attr("height");

// Map and projection
var path = d3.geoPath();
var projection = d3.geoMercator()
  .scale(140000)
  .center([-76.61,39.28])
  .translate([width / 2, height / 2]);

// Data and color scale
var data = d3.map();
var colorScale = d3.scaleThreshold()
  .domain([0, 1, 2, 4, 6, 8])
  .range(d3.schemeBlues[7]);

// Load external data and boot
  d3.queue()
  .defer(d3.json, "https://raw.githubusercontent.com/katesanders9/HCI-project/master/new.geojson")
  .defer(d3.csv, "https://raw.githubusercontent.com/katesanders9/HCI-project/master/SNAP.csv", function(d) { data.set(d.OBJECTID, +d.snap19); })
  .await(ready);


function ready(error, topo) {

  var tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip2")
    .style("width", 60 +"px");
  var area = d3.select("#asdfg")
    .append("div")
    .html("Location:")
    .style("font-weight", "normal");

    var mouseover = function(d) {
    tooltip
      .style('display', 'block');

  }

    var mousemove = function(d) {
      area
        .html("Location: " + d.properties.CSA2010)
        .style("font-weight", "bold");
      tooltip
          .html(parseInt(data.get(d.id)) + "%")
          .style('top', (d3.event.layerY + 10) + 'px') // always 10px below the cursor
    .style('left', (d3.event.layerX + 10) + 'px'); // always 10px to the right of the mouse
    }

  var mouseleave = function(d) {
    area
      .html("Location:")
      .style("font-weight", "normal");
      tooltip
        .style('display', 'none');
  }

  // Draw the map
  svg.append("g")
    .selectAll("path")
    .data(topo.features)
    .enter()
    .append("path")
      // draw each country
      .attr("d", d3.geoPath()
        .projection(projection)
      )
      // set the color of each country
      .attr("fill", function (d) {
      d.total = data.get(d.id) || 0;
        return colorScale(d.total);
      })
      .style("stroke", "transparent")
      .attr("class", function(d){ return "Country" } )
      .style("opacity", .8)
      .on("mouseover", mouseover )
      .on("mousemove", mousemove )
      .on("mouseleave", mouseleave );
    }
}

function choroHover3(div) {
  var svg = d3.select(div),
  width = +svg.attr("width"),
  height = +svg.attr("height");

// Map and projection
var path = d3.geoPath();
var projection = d3.geoMercator()
  .scale(140000)
  .center([-76.61,39.28])
  .translate([width / 2, height / 2]);

// Data and color scale
var data = d3.map();
var colorScale = d3.scaleThreshold()
  .domain([ 30, 60, 90, 120])
  .range(d3.schemeSpectral[5]);

d3.imageload = function(src, cb) {
    image = new Image();
    image.src = src;
    image.onload = function() { cb(null, image); };
    image.onerror = cb;
  }

// Load external data and boot
  d3.queue()
  .defer(d3.json, "https://raw.githubusercontent.com/katesanders9/HCI-project/master/1937NEW.geojson")
  .await(ready);


function ready(error, topo) {

  var tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip2")
    .style("width", 100 +"px");
  var area = d3.select("#asdfz")
    .append("div")
    .html("Area description: ")
    .style("font-weight", "normal");

    var mouseover = function(d) {
    tooltip
      .style('display', 'block');

  }

    var mousemove = function(d) {
      area
        .html("Area description: " + d.properties.desc)
        .style("font-weight", "bold");
      tooltip
          .html("Grade: " + d.properties.holc_grade)
          .style('top', (d3.event.layerY + 10) + 'px') // always 10px below the cursor
    .style('left', (d3.event.layerX + 10) + 'px'); // always 10px to the right of the mouse
    }

  var mouseleave = function(d) {
    area
      .html("Area description: ")
      .style("font-weight", "normal");
      tooltip
        .style('display', 'none');
  }

  // Draw the map
  svg.append("g")
    .selectAll("path")
    .data(topo.features)
    .enter()
    .append("path")
      // draw each country
      .attr("d", d3.geoPath()
        .projection(projection)
      )
      // set the color of each country
      .attr("fill", function (d) {
      d.total = d.properties.holc_grade == 'A' ? 100 : (d.properties.holc_grade == 'B' ? 70 : d.properties.holc_grade == 'C' ? 40 : 0);
        return colorScale(d.total);
      })
      .style("stroke", "transparent")
      .attr("class", function(d){ return "Country" } )
      .style("opacity", .4)
      .on("mouseover", mouseover )
      .on("mousemove", mousemove )
      .on("mouseleave", mouseleave );
    }
}

function choroHover4(div) {
  var svg = d3.select(div),
  width = +svg.attr("width"),
  height = +svg.attr("height");

// Map and projection
var path = d3.geoPath();
var projection = d3.geoMercator()
  .scale(140000)
  .center([-76.61,39.28])
  .translate([width / 2, height / 2]);

// Data and color scale
var data = d3.map();
var colorScale = d3.scaleThreshold()
  .domain([60, 70, 75, 80, 85, 90])
  .range(d3.schemeBlues[7]);

// Load external data and boot
  d3.queue()
  .defer(d3.json, "https://raw.githubusercontent.com/katesanders9/HCI-project/master/voting.geojson")
  .await(ready);


function ready(error, topo) {

  var tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip2")
    .style("width", 60 +"px");
  var area = d3.select("#asdfgx")
    .append("div")
    .html("Location:")
    .style("font-weight", "normal");

    var mouseover = function(d) {
    tooltip
      .style('display', 'block');

  }

    var mousemove = function(d) {
      area
        .html("Location: " + d.properties.CSA2010)
        .style("font-weight", "bold");
      tooltip
          .html(parseInt(d.properties.regvote18) + "%")
          .style('top', (d3.event.layerY + 10) + 'px') // always 10px below the cursor
    .style('left', (d3.event.layerX + 10) + 'px'); // always 10px to the right of the mouse
    }

  var mouseleave = function(d) {
    area
      .html("Location:")
      .style("font-weight", "normal");
      tooltip
        .style('display', 'none');
  }

  // Draw the map
  svg.append("g")
    .selectAll("path")
    .data(topo.features)
    .enter()
    .append("path")
      // draw each country
      .attr("d", d3.geoPath()
        .projection(projection)
      )
      // set the color of each country
      .attr("fill", function (d) {
      d.total = parseInt(d.properties.regvote18) || 0;
        return colorScale(d.total);
      })
      .style("stroke", "transparent")
      .attr("class", function(d){ return "Country" } )
      .style("opacity", .8)
      .on("mouseover", mouseover )
      .on("mousemove", mousemove )
      .on("mouseleave", mouseleave );
    }
}


function lineButtons(div) {
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select(div)
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/5_OneCatSevNumOrdered.csv", function(data) {

    // List of groups (here I have one group per column)
    var allGroup = d3.map(data, function(d){return(d.name)}).keys()

    // add the options to the button
    d3.select("#lineselectButton")
      .selectAll('myOptions')
      .data(allGroup)
      .enter()
      .append('option')
      .text(function (d) { return d; }) // text showed in the menu
      .attr("value", function (d) { return d; }) // corresponding value returned by the button

    // A color scale: one color for each group
    var myColor = d3.scaleOrdinal()
      .domain(allGroup)
      .range(d3.schemeSet2);

    // Add X axis --> it is a date format
    var x = d3.scaleLinear()
      .domain(d3.extent(data, function(d) { return d.year; }))
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(7));

    // Add Y axis
    var y = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) { return +d.n; })])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y));

    // Initialize line with first group of the list
    var line = svg
      .append('g')
      .append("path")
        .datum(data.filter(function(d){return d.name==allGroup[0]}))
        .attr("d", d3.line()
          .x(function(d) { return x(d.year) })
          .y(function(d) { return y(+d.n) })
        )
        .attr("stroke", function(d){ return myColor("valueA") })
        .style("stroke-width", 4)
        .style("fill", "none")

    // A function that update the chart
    function update(selectedGroup) {

      // Create new data with the selection?
      var dataFilter = data.filter(function(d){return d.name==selectedGroup})

      // Give these new data to update line
      line
          .datum(dataFilter)
          .transition()
          .duration(1000)
          .attr("d", d3.line()
            .x(function(d) { return x(d.year) })
            .y(function(d) { return y(+d.n) })
          )
          .attr("stroke", function(d){ return myColor(selectedGroup) })
    }

    // When the button is changed, run the updateChart function
    d3.select("#lineselectButton").on("change", function(d) {
        // recover the option that has been chosen
        var selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
        update(selectedOption)
    })

})
}



function pieTool(div) {
// define data
var dataset = [
    {label: "Bengali", count: 83},
    {label: "Gujarati", count: 46},
    {label: "Hindi", count: 300},
    {label: "Kannada", count: 38},
    {label: "Marathi", count: 72},
    {label: "Oriya", count: 33},
    {label: "Punjabi", count: 29},
    {label: "Tamil", count: 61},
    {label: "Telugu", count: 74},
    {label: "Urdu", count: 52}
  ];

// chart dimensions
var width = 600;
var height = 400;

// a circle chart needs a radius
var radius = Math.min(width, height) / 2;

// legend dimensions
var legendRectSize = 12; // defines the size of the colored squares in legend
var legendSpacing = 4; // defines spacing between squares

// define color scale
var color = d3.scaleOrdinal(d3.schemeCategory20c);
// more color scales: https://bl.ocks.org/pstuffa/3393ff2711a53975040077b7453781a9

var svg = d3.select(div) // select element in the DOM with id 'chart'
  .append('svg') // append an svg element to the element we've selected
  .attr('width', width) // set the width of the svg element we just added
  .attr('height', height) // set the height of the svg element we just added
  .append('g') // append 'g' element to the svg element
  .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')'); // our reference is now to the 'g' element. centerting the 'g' element to the svg element

var arc = d3.arc()
  .innerRadius(0) // none for pie chart
  .outerRadius(radius); // size of overall chart

var pie = d3.pie() // start and end angles of the segments
  .value(function(d) { return d.count; }) // how to extract the numerical data from each entry in our dataset
  .sort(null); // by default, data sorts in oescending value. this will mess with our animation so we set it to null

// define tooltip
var tooltip = d3.select(div) // select element in the DOM with id 'chart'
  .append('div') // append a div element to the element we've selected                                    
  .attr('class', 'tooltip2'); // add class 'tooltip' on the divs we just selected

tooltip.append('div') // add divs to the tooltip defined above                            
  .attr('class', 'label'); // add class 'label' on the selection                         

tooltip.append('div') // add divs to the tooltip defined above                     
  .attr('class', 'count'); // add class 'count' on the selection                  

tooltip.append('div') // add divs to the tooltip defined above  
  .attr('class', 'percent'); // add class 'percent' on the selection

dataset.forEach(function(d) {
  d.count = +d.count; // calculate count as we iterate through the data
  d.enabled = true; // add enabled property to track which entries are checked
});

// creating the chart
var path = svg.selectAll('path') // select all path elements inside the svg. specifically the 'g' element. they don't exist yet but they will be created below
  .data(pie(dataset)) //associate dataset wit he path elements we're about to create. must pass through the pie function. it magically knows how to extract values and bakes it into the pie
  .enter() //creates placeholder nodes for each of the values
  .append('path') // replace placeholders with path elements
  .attr('d', arc) // define d attribute with arc function above
  .attr('fill', function(d) { return color(d.data.label); }) // use color scale to define fill of each label in dataset
  .each(function(d) { this._current - d; }); // creates a smooth animation for each track

// mouse event handlers are attached to path so they need to come after its definition
path.on('mouseover', function(d) {  // when mouse enters div      
 var total = d3.sum(dataset.map(function(d) { // calculate the total number of tickets in the dataset         
  return (d.enabled) ? d.count : 0; // checking to see if the entry is enabled. if it isn't, we return 0 and cause other percentages to increase                                      
  }));                                                      
 var percent = Math.round(1000 * d.data.count / total) / 10; // calculate percent
 tooltip.select('.label').html(d.data.label); // set current label           
 tooltip.select('.count').html('$' + d.data.count); // set current count            
 tooltip.select('.percent').html(percent + '%'); // set percent calculated above          
 tooltip.style('display', 'block'); // set display                     
});                                                           

path.on('mouseout', function() { // when mouse leaves div                        
  tooltip.style('display', 'none'); // hide tooltip for that element
 });

path.on('mousemove', function(d) { // when mouse moves                  
  tooltip.style('top', (d3.event.layerY + 10) + 'px') // always 10px below the cursor
    .style('left', (d3.event.layerX + 10) + 'px'); // always 10px to the right of the mouse
  });

// define legend
var legend = svg.selectAll('.legend') // selecting elements with class 'legend'
  .data(color.domain()) // refers to an array of labels from our dataset
  .enter() // creates placeholder
  .append('g') // replace placeholders with g elements
  .attr('class', 'legend') // each g is given a legend class
  .attr('transform', function(d, i) {                   
    var height = legendRectSize + legendSpacing; // height of element is the height of the colored square plus the spacing      
    var offset =  height * color.domain().length / 2; // vertical offset of the entire legend = height of a single element & half the total number of elements  
    var horz = 18 * legendRectSize; // the legend is shifted to the left to make room for the text
    var vert = i * height - offset; // the top of the element is hifted up or down from the center using the offset defiend earlier and the index of the current element 'i'               
      return 'translate(' + horz + ',' + vert + ')'; //return translation       
   });

// adding colored squares to legend
legend.append('rect') // append rectangle squares to legend                                   
  .attr('width', legendRectSize) // width of rect size is defined above                        
  .attr('height', legendRectSize) // height of rect size is defined above                      
  .style('fill', color) // each fill is passed a color
  .style('stroke', color) // each stroke is passed a color
  .on('click', function(label) {
    var rect = d3.select(this); // this refers to the colored squared just clicked
    var enabled = true; // set enabled true to default
    var totalEnabled = d3.sum(dataset.map(function(d) { // can't disable all options
      return (d.enabled) ? 1 : 0; // return 1 for each enabled entry. and summing it up
    }));

    if (rect.attr('class') === 'disabled') { // if class is disabled
      rect.attr('class', ''); // remove class disabled
    } else { // else
      if (totalEnabled < 2) return; // if less than two labels are flagged, exit
      rect.attr('class', 'disabled'); // otherwise flag the square disabled
      enabled = false; // set enabled to false
    }

    pie.value(function(d) { 
      if (d.label === label) d.enabled = enabled; // if entry label matches legend label
        return (d.enabled) ? d.count : 0; // update enabled property and return count or 0 based on the entry's status
    });

    path = path.data(pie(dataset)); // update pie with new data

    path.transition() // transition of redrawn pie
      .duration(750) // 
      .attrTween('d', function(d) { // 'd' specifies the d attribute that we'll be animating
        var interpolate = d3.interpolate(this._current, d); // this = current path element
        this._current = interpolate(0); // interpolate between current value and the new value of 'd'
        return function(t) {
          return arc(interpolate(t));
        };
      });
  });

// adding text to legend
legend.append('text')                                    
  .attr('x', legendRectSize + legendSpacing)
  .attr('y', legendRectSize - legendSpacing)
  .text(function(d) { return d; }); // return label

}



function groupBar(div, da, top) {
var margin = {top: 10, right: 30, bottom: 200, left: 50},
    width = 1200 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select(div)
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
d3.csv(da, function(data) {

  // List of subgroups = header of the csv files = soil condition here
  var subgroups = data.columns.slice(1)

  // List of groups = species here = value of the first column called group -> I show them on the X axis
  var groups = d3.map(data, function(d){return(d.CSA2010)}).keys()

  // Add X axis
  var x = d3.scaleBand()
      .domain(groups)
      .range([0, width])
      .padding([0.2])
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickSize(0));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, top])
    .range([ height, 0 ]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Another scale for subgroup position?
  var xSubgroup = d3.scaleBand()
    .domain(subgroups)
    .range([0, x.bandwidth()])
    .padding([0.05])

  // color palette = one color per subgroup
  var color = d3.scaleOrdinal()
    .domain(subgroups)
  .range(d3.schemeSpectral[4]);

  // Show the bars
  svg.append("g")
    .selectAll("g")
    // Enter in data = loop group per group
    .data(data)
    .enter()
    .append("g")
      .attr("transform", function(d) { return "translate(" + x(d.CSA2010) + ",0)"; })
    .selectAll("rect")
    .data(function(d) { return subgroups.map(function(key) { return {key: key, value: d[key]}; }); })
    .enter().append("rect")
      .attr("x", function(d) { return xSubgroup(d.key); })
      .attr("y", function(d) { return y(d.value); })
      .attr("width", xSubgroup.bandwidth())
      .attr("height", function(d) { return height - y(d.value); })
      .attr("fill", function(d) { return color(d.key); });
      svg.selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

})
}