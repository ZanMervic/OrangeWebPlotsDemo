"use client";

import React from 'react';
import { Scatter } from 'react-chartjs-2';
import 'chart.js/auto';

const data = {
  datasets: [
    {
      label: 'Scatter Dataset',
      data: Array.from({ length: 100 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
      })),
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
  ],
};

const options = {
  scales: {
    x: {
      type: 'linear',
      position: 'bottom',
    },
  },
};

export default function ChartJSPage() {
  return (
    <div className='w-full h-full flex justify-center items-center bg-slate-400'>
      <header className="App-header">
        {/* @ts-ignore */}
        <Scatter data={data} options={options} className="w-[50vw] h-[50vh]" />
      </header>
    </div>
  );
}
