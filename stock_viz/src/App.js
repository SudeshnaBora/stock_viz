import './App.css';
import React from "react";
// Import Highcharts
import Highcharts from "highcharts";
// Import our demo components
import Chart from "./components/Chart.jsx";
import stockData from './resources/stock_metadata.json';

// Load Highcharts modules
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/highcharts-more")(Highcharts);

function App() {

  const chartOptions = {
  chart: {
    type: "packedbubble",
    height: "80%"
  },
  title: {
        text: 'Stock Market - Market capitalization distribution',
        align: 'left'
    },
  tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}</b><br>Market Cap: {point.value}<br>PE: {point.PE}<br>Sectoral PE:{point.Sectoral\ PE}'
    },
  // plotOptions: {
  //       packedbubble: {
  //           minSize: '10%',
  //           maxSize: '100%',
  //           zMin: 0,
  //           zMax: 1000,
  //           layoutAlgorithm: {
  //               gravitationalConstant: 0.05,
  //               splitSeries: true,
  //               seriesInteraction: false,
  //               dragBetweenSeries: true,
  //               parentNodeLimit: true
  //           },
  //           dataLabels: {
  //               enabled: true,
  //               format: '{point.name}',
  //               filter: {
  //                   property: 'y',
  //                   operator: '>',
  //                   value: 250
  //               },
  //               style: {
  //                   color: 'black',
  //                   textOutline: 'none',
  //                   fontWeight: 'normal'
  //               }
  //           }
  //       }
  //   },
      plotOptions: {
        packedbubble: {
            maxSize: '100%',
            minSize: '10%',
            dataLabels: {
                enabled: true,
                format: '{point.name} <br>',
            },
        layoutAlgorithm: {
                gravitationalConstant: 0.05,
                splitSeries: true,
                seriesInteraction: false,
                dragBetweenSeries: true,
                parentNodeLimit: true
            },
        series: {
            borderColor: '#303030'
        }
        }
    },
  series: stockData,
};

  return (
      <div>
        <h1>Demos</h1>
        <h2>Highcharts</h2>
        <Chart options={chartOptions} highcharts={Highcharts} />
      </div>
  );
}

export default App;