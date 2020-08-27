window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            text: "Coordinates"
        },
        axisX: {
            title:"X coordinates"
        },
        axisY: {
            title:"Y coordinates",
            includeZero: true
        },
        legend:{
            horizontalAlign: "left"
        },
        data: [{
            type: "bubble",
            showInLegend: true,
            legendText: "Gene",
            legendMarkerType: "circle",
            legendMarkerColor: "grey",
            toolTipContent: "<br/>Coordinates: {x} X<br/> Y: {y}<br/> ID: {z}.",
            dataPoints: [
                { x:283, y:1144, z:'Gene5'  },
                { x: 701, y: 932, z: 'Gene5' },
                { x: 728, y: 921, z: 'Gene5' },
                { x: 50, y: 1380, z: 'Gene5' },
                { x: 965, y: 2206, z: 'Gene5' },
                { x: 933, y: 1399, z: 'Gene5' },
                { x: 1712, y: 1592, z: 'Gene5' },
                { x: 66, y: 1390, z: 'Gene5' },
                { x: 1955, y: 134, z: 'Gene5' },
                { x: 1993, y: 134, z: 'Gene5' },
                { x: 311, y: 1164, z: 'Gene5' },
                { x: 114, y: 1435, z: 'Gene5' },
                { x: 117, y: 1390, z: 'Gene5' },
               
            ]
        }]
    });
    chart.render();
    
    }