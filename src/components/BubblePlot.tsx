import React from "react";
import { Bubble } from "react-chartjs-2";

const data = {
  labels: ["Modern JavaScript"],
  datasets: [
    {
      label: "React",
      backgroundColor: "dodgerblue",
      borderColor: "transparent",
      // x  学習コトス
      // y  LinkedIn求人数
      // r  ダウンロード数  ※桁が大きいので、10万で割っている。
      // 2020-6頃の数値
      data: [{ x: 20, y: 866, r: 6350000 / 100000 }],
    },
    {
      label: "Vue",
      backgroundColor: "lightgreen",
      borderColor: "transparent",
      data: [{ x: 10, y: 749, r: 1310000 / 100000 }],
    },
    {
      label: "Angular",
      backgroundColor: "red",
      borderColor: "transparent",
      data: [{ x: 30, y: 389, r: 410000 / 100000 }],
    },
  ],
};

const options = {
  title: {
    display: true,
    fontSize: 18,
    text: "NPM downloads comparison - global",
  },
  scales: {
    // y軸の設定
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Number of job offer in LinedIn - Japan",
          fontSize: 18,
        },
        // 軸メモリのmaxやminの設定。
        ticks: {
          min: 0,
          max: 1300,
          fontSize: 14,
        },
      },
    ],
    // x軸の設定
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Learning cost",
          fontSize: 18,
        },
        // 軸メモリのmaxやminの設定。
        ticks: {
          min: 5,
          max: 35,
          fontSize: 14,
        },
      },
    ],
  },
};

const BubblePlot: React.FC = () => {
  return (
    <div>
      <Bubble data={data} options={options} />
    </div>
  );
};

export default BubblePlot;
