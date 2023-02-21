import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

const Device = React.lazy(() => import("device/app"));

const App = () => (
  <div className="container">
    <BrowserRouter>
      <Routes>
        <Route path="/device" element={<Device />} />
      </Routes>
    </BrowserRouter>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
