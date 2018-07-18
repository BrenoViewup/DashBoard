import React from "react";
import ReactDOM from "react-dom";
import Drawer from "../src/components/Drawer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Drawer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
