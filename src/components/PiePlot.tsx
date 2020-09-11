import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";

const data = {
  labels: ["Windows", "Mac", "Linux"],
  datasets: [
    {
      data: [90, 7, 3],
      backgroundColor: ["green", "yellow", "orange"],
      // 1つだけ設定すると、すべてその値で統一される。
      hoverBackgroundColor: "red",
      // 枠の色。transparentにすると透明(CSSでも使える設定)。
      borderColor: ["transparent", "transparent", "red"],
    },
  ],
};

const PiePlot: React.FC = () => {
  return (
    <div>
      <Doughnut data={data} />
      <Pie data={data} />
    </div>
  );
};

export default PiePlot;
