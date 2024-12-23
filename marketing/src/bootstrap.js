import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

export const mountMarketing = (el) => {
  ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const elementToMount = document.querySelector("#marketing-dev-root");
  if (elementToMount) {
    mountMarketing(elementToMount);
  }
}
