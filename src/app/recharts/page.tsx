"use client";

import React, { useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface DataPoint {
  x: number;
  y: number;
}

const data: DataPoint[] = [
  { x: 20, y: 30 },
  { x: 40, y: 70 },
  { x: 50, y: 100 },
  { x: 70, y: 150 },
  { x: 90, y: 200 },
];

export default function RechartsPage() {
  const [selectedPoints, setSelectedPoints] = useState<DataPoint[]>([]);

  const handlePointClick = (data: DataPoint) => {
    const isSelected = selectedPoints.find(point => point.x === data.x && point.y === data.y);
    if (isSelected) {
      setSelectedPoints(selectedPoints.filter(point => point.x !== data.x || point.y !== data.y));
    } else {
      setSelectedPoints([...selectedPoints, data]);
    }
  };
  return (
    <div className='w-full h-full flex justify-center items-center bg-slate-400'>
      <ScatterChart width={1000} height={600}>
        <CartesianGrid />
        <XAxis type="number" dataKey="x" />
        <YAxis type="number" dataKey="y" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="A school" data={data} fill="blue" onClick={({payload}) => handlePointClick(payload)} />
      </ScatterChart>
    </div>
  )
}