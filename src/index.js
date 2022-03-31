import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";
import Table from "/src/table.js";
import data from "/src/education_data.js";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
