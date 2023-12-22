import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const CpuGpuChart = ({ cpuData, gpuData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [], // Add your labels (time or other categories) here
        datasets: [
          {
            label: 'CPU Usage',
            data: cpuData,
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            fill: false,
          },
          {
            label: 'GPU Usage',
            data: gpuData,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'linear', // or 'time' if using time-based data
            position: 'bottom',
          },
          y: {
            beginAtZero: true,
            max: 100,
          },
        },
      },

    });

    return () => {
      myChart.destroy();
    };
  }, [cpuData, gpuData]);

  return <canvas ref={chartRef} width="400" height="200" />
};

export default CpuGpuChart;
