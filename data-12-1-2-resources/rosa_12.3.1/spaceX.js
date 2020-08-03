const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

d3.json(url).then(spaceXResults => console.log("full_name", spaceXResults[0].full_name));

d3.json(url).then(spaceXResults => console.log("latitude" ,spaceXResults[0].location.latitude));
//couldnt get challenge at end of 3.1 to work with map from .then 
// var receivedData= d3.json(url).then.(data.map(data=>data.location));


// d3.json("samples.json").then(function(data){
//     console.log("hello");
// });

d3.json(url).then(function(data){
    latlong = data.location.map(location => location.latitude);
    console.log("latlong", latlong);
});