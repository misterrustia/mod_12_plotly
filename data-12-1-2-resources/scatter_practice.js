var trace1 ={
    x: [2,4,5,8,15],
    y: [2,9,5,4,3],
    mode: "markers+text",
    type:'scatter',
    name: 'blluee bubbulsss',
    text: ["jimmy","joe","billy","bo-bo",'almost_forgot_about_you'],
    textposition: 'top center',
    textfont: {
        family: 'releway, sans-serif'
    },
    marker: { size:130}
};

var trace2 ={
    x: [12,14,15,5,3],
    y: [12,19,15,9,4],
    mode: "markers+text",
    type:'scatter',
    name: 'blluee bubbulsss',
    text: ["bubba","scott","riley","rachel"],
    textposition: 'top center',
    textfont: {
        family: 'Times New Roman'
    },
    marker: { size:20}
};

var data = [ trace1,trace2];

var layout ={
    xaxis:{
        range: [1,20]
    },
    yaxis: {
        range: [1, 25]
    },
    legend: {
        y:0.5,
        yref: "paper",
        font:{
            family:"Arial, sans-serif",
            size: 20,
            color: 'blue'
        }
    },
    title: "practicing scatter plots"
};

Plotly.newPlot('myDiv',data, layout)