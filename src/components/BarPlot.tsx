import React from "react";
import { Bar, HorizontalBar } from "react-chartjs-2";

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      // chartの名前
      label: "Demo bar plot",
      backgroundColor: "#008080",
      hoverBackgroundColor: "purple",
      borderColor: "transparent",
      data: [5, 6, 9, 15, 20, 4, 1],
    },
  ],
};

const BarPlot: React.FC = () => {
  return (
    <div>
      <Bar data={data} />
      <HorizontalBar data={data} />
    </div>
  );
};

export default BarPlot;
