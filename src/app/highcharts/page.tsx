"use client";

import React, { useRef } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const selection = function(this: Highcharts.Chart, e: any) {
  // Select points
  this.series.forEach(series => {
      series.points.forEach(point => {
          if (
              point.x >= e.xAxis[0].min && point.x <= e.xAxis[0].max &&
              point.y! >= e.yAxis[0].min && point.y! <= e.yAxis[0].max
          ) {
              point.select(true, true);
          }
      });
  });

  // Fire a custom event
  Highcharts.fireEvent(
      this,
      'selectedpoints', {
          points: this.getSelectedPoints()
      }
  );

  return false; // Don't zoom
}

const selectedpoints = function(this: any, e: any) {
  // Show a label
  if (this.toast) {
      this.toast = this.toast.destroy();
  }

  this.toast = this.renderer.label(
      `<b>${e.points.length} points selected.</b>
      <br>Click on empty space to deselect.`,
      100,
      120
  )
      .attr({
          fill: Highcharts.getOptions().colors![0],
          padding: 10,
          r: 5,
          zIndex: 8
      })
      .css({
          color: '#FFFFFF'
      })
      .add();

  setTimeout(() => {
      if (this.toast) {
          this.toast = this.toast.destroy();
      }
  }, 2000);
}

const click = function(this: Highcharts.Chart, e: Highcharts.PointClickEventObject) {
  const points = this.getSelectedPoints();
  if (points.length > 0) {
      points.forEach(point => point.select(false));
  }
}

const options: Highcharts.Options = {
    title: {
        text: 'My chart'
    },
    chart: {
        type: 'scatter',
        height: 600,
        width: 1000,
        events: {
            selection: selection,
            selectedpoints: selectedpoints,
            // @ts-ignore
            click: click
        },
        zoomType: 'xy'
    },
    series: [{
        type: 'scatter',
        data: [[1,2], [2,3], [1,5], [5,2], [7,3], [8,5], [9,2]],
        allowPointSelect: true,
        showInLegend: false
    }]
};

export default function HighchartsPage() {
    const chartRef = useRef<HighchartsReact.RefObject>(null);

    return (
        <div className='w-full h-full flex justify-center items-center bg-slate-400'>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                ref={chartRef}
            />
        </div>
    );
}