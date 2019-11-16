import React from "react";
import ReactDOM from "react-dom";

import ContainerOne from "./components/ContainerOne.js";
import ContainerTwo from "./components/ContainerTwo.js";
import ContainerThree from "./components/ContainerThree.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ContainerOne />
      <ContainerTwo />
      <ContainerThree />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
