
console.log("cityGrowth" ,cityGrowths);

var sortedCitys = cityGrowths.sort((a,b) => 
a.Increase_from_2016 - b.Increase_from_2016).reverse();

console.log("sortedcity",sortedCitys);

//create var of top 5 cities from sorted list 

var topFiveCities = sortedCitys.slice(0,5);
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

console.log("namesTopfive", topFiveCityNames);

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);


var byPopcitys = cityGrowths.sort((a,b) => 
a.population - b.population).reverse();

console.log("byPopcitys",byPopcitys);


var topSevenpops = byPopcitys.slice(0,7);
console.log("topSevenpops",topSevenpops);

var topSevenNames = topSevenpops.map(city => city.City);
var topSevenpopNum = topSevenpops.map(city => parseInt(city.population));

var trace1 = {
    x: topSevenNames,
    y: topSevenpopNum,
    type: "bar"
  };
  var data7 = [trace1];
  var layout7 = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("snd-bar-plot", data7, layout7);