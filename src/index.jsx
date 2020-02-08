import "regenerator-runtime/runtime";
import React from "react";
import { hot } from "react-hot-loader/root";
import { render } from "react-dom";

import App from "./App";

import "./reset.css";
import "./index.sass";

const AppWithHMR = hot(App);
render(<AppWithHMR />, document.getElementById("root"));