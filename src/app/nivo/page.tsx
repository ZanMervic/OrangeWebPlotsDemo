"use client";

import { ResponsiveScatterPlot } from "@nivo/scatterplot";


const data = [
  {
    "id": "group A",
    "data": [
      {
        "x": 89,
        "y": 33
      },
      {
        "x": 63,
        "y": 84
      },
      {
        "x": 81,
        "y": 18
      },
      {
        "x": 97,
        "y": 44
      },
      {
        "x": 79,
        "y": 39
      },
      {
        "x": 63,
        "y": 81
      },
      {
        "x": 0,
        "y": 41
      },
      {
        "x": 4,
        "y": 93
      }
    ]
  },
  {
    "id": "group B",
    "data": [
      {
        "x": 66,
        "y": 3
      },
      {
        "x": 21,
        "y": 87
      },
      {
        "x": 8,
        "y": 82
      },
      {
        "x": 8,
        "y": 60
      },
      {
        "x": 1,
        "y": 98
      },
      {
        "x": 1,
        "y": 68
      },
      {
        "x": 3,
        "y": 9
      },
      {
        "x": 98,
        "y": 44
      },]
    }
]

export default function NivoPage() {
  return (
    <div className='w-full h-full flex justify-center items-center bg-slate-400'>
      <ResponsiveScatterPlot
        data={data}
        margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
        xScale={{ type: 'linear', min: 0, max: 'auto' }}
        xFormat=">-.2f"
        yScale={{ type: 'linear', min: 0, max: 'auto' }}
        yFormat=">-.2f"
        nodeSize={20}
        blendMode="multiply"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'weight',
            legendPosition: 'middle',
            legendOffset: 46,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'size',
            legendPosition: 'middle',
            legendOffset: -60,
            truncateTickAt: 0
        }}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 130,
                translateY: 0,
                itemWidth: 100,
                itemHeight: 12,
                itemsSpacing: 5,
                itemDirection: 'left-to-right',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </div>
  )
}