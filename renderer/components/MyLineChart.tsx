import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const MyLineChart = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Atualizar estado para manter apenas os últimos 50 pontos
      
      setData(prevData => [...prevData.slice(-50), [new Date().getTime(), Math.floor(Math.random() * 100)]]);
    }, 1000);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []);

  const options:any = {
    chart: {
      id: "chart2",
      type: "line",
      height: 230,
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
    },
    colors: ["#546E7A"],
    stroke: {
      width: 3,
    },
    dataLabels: {
      enabled: true,
    },
    fill: {
      opacity: 1,
    },
    markers: {
      size: 1,
    },
    xaxis: {
      type: "datetime",
    },
    animations: {
        enabled: false,
    },
    annotations: {
        xaxis: [
          {
            x: new Date().getTime(),
            borderColor: "#00E396",
            label: {
              text: props.graphLabel || "GRÁFICO",
              style: {
                color: "#fff",
                background: "#00E396",
              },
                offsetY: 0, // ajuste vertical
                offsetX: 0, // ajuste horizontal
            },
          },
        ],
      },
  };

  const series = [{ data: data, animate: { enabled: false } }];

  return (
    <div id="wrapper">
      <div id={"chart-line-" + props.chartID}>
        <Chart options={options} series={series} type="line" height={230} />
      </div>
    </div>
  );
};

export default MyLineChart;
