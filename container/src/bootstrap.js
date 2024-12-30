import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";

const root = ReactDOM.createRoot(document.querySelector("#root"));

console.log("test");

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
