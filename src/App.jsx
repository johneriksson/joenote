import React from "react"
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Note from "./Note"

import "./App.css"

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="app">
					<header>
						<h1>JOENote - coming soon!</h1>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/notes/1">notes/1</Link>
							</li>
						</ul>
					</header>

					<Switch>
						<Route path="/about">
							<p>about</p>
						</Route>
						<Route path="/notes/:noteId">
							<Note />
						</Route>
						<Route path="/">
							<p>home</p>
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}