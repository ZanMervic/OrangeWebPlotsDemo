"use client";

import { VictoryScatter, VictoryChart, VictoryTheme, VictorySelectionContainer } from "victory"

export default function VictoryPage() {
  return (
    <div className='w-full h-[96.5vh] flex justify-center items-center bg-slate-400'>
      <VictoryChart
        width={1000} 
        height={600}
        theme={VictoryTheme.material}
        domain={{ x: [0, 200], y: [0, 200] }}
        containerComponent={
          <VictorySelectionContainer 
            onSelection={(points, bounds, props) => console.log(points, bounds, props)}
          />
        }
      >
        <VictoryScatter
          style={{ data: { fill: ({ active }) => active ? "tomato" : "gray" } }}
          size={7}
          data={[
            { x: 20, y: 30 },
            { x: 40, y: 70 },
            { x: 150, y: 100 },
            { x: 70, y: 10 },
            { x: 90, y: 200 },
            { x: 110, y: 150 },
            { x: 130, y: 100 },
            { x: 150, y: 200 },
            { x: 170, y: 250 },
          ]}/>
      </VictoryChart>
    </div>
  )
}