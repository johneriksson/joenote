import "regenerator-runtime/runtime";

import { hot } from "react-hot-loader/root";
import React from "react";
import { render } from "react-dom";

import App from "./App";

import "./reset.css";
import "./index.css";

// const Root = () => (
// 	<Router history={ browserHistory } onUpdate={onRouterUpdate} render={applyRouterMiddleware(useScroll())}>
// 		{ routes }
// 	</Router>
// );
const Root = () => (
	<App />
);
// Wrap Root component in hot() to enable HMR for React. Could look less messy if not for a weird react-router warning:
// https://github.com/gaearon/react-hot-loader/issues/298#issuecomment-264459986
// It is safe to wrap this with hot() even for production.
const HotRoot = hot(Root);
render(<HotRoot />, document.getElementById("root"));