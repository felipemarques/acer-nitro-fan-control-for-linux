import React, { Component } from "react";
import Chart from "react-apexcharts";

class BrushChart2 extends Component {
  constructor(props: {mydata:[]}) {
    super(props);

    const data = props.mydata

    this.state = {
      series: [
        {
          data: data,
        },
      ],
      options: {
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
          enabled: false,
        },
        fill: {
          opacity: 1,
        },
        markers: {
          size: 0,
        },
        xaxis: {
          type: "datetime",
        },
      },

      seriesLine: [
        {
          data: data,
        },
      ],
      optionsLine: {
        chart: {
          id: "chart1",
          height: 130,
          type: "area",
          brush: {
            target: "chart2",
            enabled: true,
          },
          selection: {
            enabled: true,
            xaxis: {
              min: new Date("19 Jun 2017").getTime(),
              max: new Date("14 Aug 2017").getTime(),
            },
          },
        },
        colors: ["#008FFB"],
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.91,
            opacityTo: 0.1,
          },
        },
        xaxis: {
          type: "datetime",
          tooltip: {
            enabled: false,
          },
        },
        yaxis: {
          tickAmount: 2,
        },
      },
    };
  }

  render() {
    return (
      <div id="wrapper">
        <div id="chart-line2">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height={230}
          />
        </div>
        <div id="chart-line">
          <Chart
            options={this.state.optionsLine}
            series={this.state.seriesLine}
            type="area"
            height={130}
          />
        </div>
      </div>
    );
  }
}

export default BrushChart2;