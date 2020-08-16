function init(){
    var selector = d3.select("#selDataset");

    d3.json("samples.json").then((data)=> {
        console.log("init_running",data);
        var samplesNames = data.names;
        samplesNames.forEach((sample) => {
            selector
                .append("option")
                .text(sample)
                .property("value",sample);
                
        });
    // where do I put , and get the functions to take initial 
    // init resource 
    buildMetadata(samplesNames[0]);
    buildCharts(samplesNames[0]);
    buildbubble(samplesNames[0]);
})}
    
init();

function optionChanged(newSample){
    console.log("newSample from optionChanged:",newSample);
    buildMetadata(newSample);
    buildCharts(newSample);
    buildbubble(newSample);
}
function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
      console.log("results",result); 
            
      PANEL.html("");
     Object.entries(result).forEach(([key,value])=>{
        PANEL.append("h6")
        .text(`${key.toUpperCase()}: ${value}`)
        // .property("value",value);
        console.log("key",key,"value",value)
    });
    // call other chart functions and pass filtered result into them
    console.log("wfreq :",result.wfreq)
    Buildgague(result.wfreq)
    
    
    
  })}

function Buildgague(wfreq){
    
    var data = [
        {
          type: "indicator",
          mode: "gauge+number+delta",
          value: wfreq,
          title: { text: "BellyButton Washing Frequency", font: { size: 24 } },
         delta: { reference: 2, increasing: { color: "black" } },
          gauge: {
            axis: { range: [null, 10], tickwidth: 1, tickcolor: "darkred" },
            bar: { color: "darkblue" },
            // where gauge arrow would of gone // 
            bgcolor: "white",
            borderwidth: 2,
            bordercolor: "gray",
            steps: [
              { range: [0, 1], color: "rgba(255, 255, 255, .4)" },
              { range: [1, 2], color: "rgba(240, 230, 215, .5)" },
              { range: [2, 3], color: "rgba(232, 226, 202, .5)" },
              { range: [3, 4], color: "rgba(210, 206, 145, .5)" },
              { range: [4, 5], color: "rgba(202, 209, 125, .6)" },
              { range: [5, 6], color: "rgba(202, 209, 125, .6)" },
              { range: [6, 7], color: "rgba(170, 202, 42, .7)" },
              { range: [7, 8], color: "rgba(110, 154, 22, .8)" },
              { range: [8, 9], color: "rgba(14, 127, 0, .9)"},
              { range: [9, 10], color: "rgba(10, 120, 102, 1)"},
            ]
            
          }
        }
      ];
      
      var layout = {
        width: 500,
        height: 400,
        margin: { t: 25, r: 25, l: 25, b: 25 },
        // paper_bgcolor: "lavender",
        font: { color: "darkblue", family: "Arial" }
      };
      
      Plotly.newPlot("gauge", data, layout);
    }


function buildCharts(sample) {
    d3.json("samples.json").then((data) => {
        var outs = data.samples;
        var resultArray = outs.filter(sampleObj => sampleObj.id == sample);
    
        var result = resultArray[0];
        
        console.log("charts = data.samples[0]:",result);
        var theValues = result.sample_values
        var the_otu_labels = result.otu_labels
        var topTenValues = theValues.slice(0,10)
        var topTenLabels = the_otu_labels.slice(0,10)
        console.log("topTenValues:", topTenValues);
        console.log("topTenLabels:", topTenLabels);
        
    var trace ={
        x:topTenValues ,
   
        y:topTenLabels,

        orientation: 'h',

        type: "bar"
    };
    
    var layout={
        title: "Top Ten strains"
      
        
    };
    
    Plotly.newPlot("bar",[trace],layout);
})}


    // bubble build out-- need to refilter original samples.json
function buildbubble(sample){
    d3.json("samples.json").then((data) => {
        var outs = data.samples;
        var resultArray = outs.filter(sampleObj => sampleObj.id == sample);
    
        var result = resultArray[0];
        
        console.log("bubble = data.samples:", result);
        
        
       
        var otu_ids = result.otu_ids;
        var sample_values = result.sample_values;
        console.log("sample_values:", sample_values);
        console.log("otu_labels:", otu_ids);

var trace1 = {
    x: otu_ids,
    y: sample_values,
    text: result.otu_labels,
    mode: 'markers',
    marker: {
      color: otu_ids,
    //   ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
      opacity: [1, 0.8, 0.6, 0.4],
      size: sample_values
    }
  };
  
  var data = [trace1];
  
  var layout = {
   
    showlegend: true,
    height: 600,
    width: 1200
  };
  
  Plotly.newPlot("bubble", data, layout);
})};