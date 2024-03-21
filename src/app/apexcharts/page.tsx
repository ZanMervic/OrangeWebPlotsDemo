"use client";

import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const data = [
  { x: 10, y: 20 },
  { x: 20, y: 60 },
  { x: 30, y: 40 },
  { x: 40, y: 70 },
  { x: 50, y: 90 },
];


const options: ApexOptions = {
  chart: {
    type: 'scatter',
    zoom: {
      enabled: true,
      type: 'xy'
    },
    selection: {
      enabled: true,
      type: 'xy',
      fill: {
        color: '#24292e',
        opacity: 0.1
      },
      stroke: {
        width: 1,
        dashArray: 3,
        color: '#24292e',
        opacity: 0.4
      },
      xaxis: {
        min: undefined,
        max: undefined
      },
      yaxis: {
        min: undefined,
        max: undefined
      }
    },
    events: {
      markerClick: function(event, chartContext, { seriesIndex, dataPointIndex }) {
        console.log("Point clicked", { seriesIndex, dataPointIndex });
      },
      selection: function(chartContext, { xaxis, yaxis }) {
        console.log("Selection", { xaxis, yaxis });
      }
    }
  },
  xaxis: {
    tickAmount: 10,
    labels: {
      formatter: function(val) {
        return parseFloat(val).toFixed(1);
      }
    }
  },
  yaxis: {
    tickAmount: 7
  }
};

const series = [{
  name: "Sample",
  data: data.map(d => [d.x, d.y])
}];

export default function ApexchartsPage() {
  return (
    <div className='w-full h-full flex justify-center items-center bg-slate-400'>
      <Chart options={options} series={series} type="scatter" width={1000} height={600} />
    </div>
  )
}