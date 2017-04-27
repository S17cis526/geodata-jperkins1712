window.addEventListener('load', function() {
  if("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position){
      d3.select('body')
      .insert('div', ':first-child')
      .attr("class", "location-bar")
      .text("You are at: " + position.coords.latitute + ", " + position.coords.longitude)
    });
  }


  // build a table for our location data
  d3.json('/locations.json', function(err, locations){
    if(err) return console.log(err);
    //do something with location data
    var table = d3.select('body').append('table');

    table.append('thead')
    .append('th')
    .selectAll('th')
      .data(['address', 'latitute', 'longitude'])
      .enter()
        .append('th')
        .text(function(d){return d;})

    table.append('tbody')
    .append('tr')
    .selectAll('th')
      .data(locations)
      .enter()
        .append('tr')
        .each(function(d){
          d3.select(this).append('td').text(d.address);
          d3.select(this).append('td').text.(d.latitute);
          d3.select(this).append('td').text(d.longitude);
        });

  });


});
