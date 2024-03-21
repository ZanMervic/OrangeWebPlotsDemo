"use client";

import React from 'react';
import ReactECharts from 'echarts-for-react';

const getOption = () => ({
  title: {
    text: 'Basic Scatter Plot',
  },
  brush: {
    toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
    xAxisIndex: 0
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },
  xAxis: {},
  yAxis: {},
  series: [
    {
      symbolSize: 20,
      data: Array.from({ length: 100 }, () => [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
      ]),
      type: 'scatter',
    },
  ],
});

// The usage of ReactEChartsCore are same with above.
export default function EChartsPage() {
  return (
    <div className='w-full h-full flex justify-center items-center bg-slate-400'>
      <ReactECharts option={getOption()} style={{ height: '100%', width: '100%' }} />
    </div>
  );
}
