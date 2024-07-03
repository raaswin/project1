import React, { useRef, useState } from 'react'
import { AgCharts } from "ag-charts-react";

function buildSeries(name) {
  return {
    type: "area",
    xKey: "year",
    yKey: name.toLowerCase(),
    yName: name,
    fillOpacity: 0.5
  };
}
const series = [
  buildSeries("IE"),
  buildSeries("Chrome"),
  buildSeries("Firefox"),
  buildSeries("Safari"),
  buildSeries("Opera")
];
const positions = ["left", "top", "right", "bottom"];
const legend = {
  position: positions[1]
};

function ChartTemplate() {
  const chartRef = useRef(null);
  const [options, setOptions] = useState({
    title: {
      text: "Browser Usage Statistics"
    },
    subtitle: {
      text: "2009-2019"
    },
    data: getData(),
    series,
    legend
  });

  return (
    <div>
      <AgCharts ref={chartRef} options={options} />
    </div>
  );
}

export default ChartTemplate