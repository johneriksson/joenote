import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from "react-router-dom";
import {
	CSSTransition,
	TransitionGroup,
} from "react-transition-group";

import Home from "./views/Home";
import Note from "./views/Note";

import "./App.sass";

export default class App extends React.Component {
	// async componentDidMount() {
	// 	const a = await fetch("https://jsonplaceholder.typicode.com/todos/1");
	// 	const json = await a.json();
	// 	console.log("json", json)
	// }

	render() {

		return (
			<Router>
				<div className="app">
					<Route render={({ location }) => (
						<TransitionGroup>
						<CSSTransition
							key={location.key}
							timeout={300}
							classNames="fade"
						>
							<Switch location={location}>
								<Route path="/" exact>
									<Home />
								</Route>
								<Route path="/notes/:noteId">
									<Note />
								</Route>
							</Switch>
						</CSSTransition>
					</TransitionGroup>
					)} />
				</div>
			</Router>
		);
	}
}