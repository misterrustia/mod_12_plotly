var trace ={
    x:["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y:[22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
};

var layout={
    title: "number of drinks ordered",
    xaxis: {title:"kinds of drinks"},
    yaxis: {title:"% of orders"}
    
};

Plotly.newPlot('plotArea',[trace],layout);

//### 12.1.4

var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
       "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "pie"
  };
  var data = [trace];
  var layout = {
    title: "'Bar' Chart",
  };
  Plotly.newPlot("plotArea", [trace], layout);

