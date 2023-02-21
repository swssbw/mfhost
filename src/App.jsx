import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import DeviceApp from "device/App";
import ComplexApp from "complex/App";

const App = () => (
  <div className="container">
    <h1>HOST</h1>
    <DeviceApp />
    <ComplexApp />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
