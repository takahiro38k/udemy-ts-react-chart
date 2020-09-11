import "./App.css";

import React from "react";

import LinePlot from "./components/LinePlot";
import PiePlot from "./components/PiePlot";
import BarPlot from "./components/BarPlot";
import RadarPlot from "./components/RadarPlot";
import BubblePlot from "./components/BubblePlot";
import MaterialUI from "./components/MaterialUI";

// react-chartjs-2
// sampleページ
// https://github.com/jerairrest/react-chartjs-2/tree/master/example/src/components

function App() {
  return (
    <div className="App">
      {/* Material-UI */}
      <MaterialUI />
      {/* react-chartjs-2 */}
      <LinePlot />
      <PiePlot />
      <BarPlot />
      <RadarPlot />
      <BubblePlot />
    </div>
  );
}

export default App;
