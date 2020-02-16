import React from "react";
import { useParams, Link } from "react-router-dom";

import Icon from "../components/Icon";
import "./Home.sass";

export default class Home extends React.Component {

	state = {
		notes: []
	}

	componentDidMount() {
		fetch("http://localhost:3001/notes")
			.then(res => res.json())
			.then(notes => this.setState({ notes }));
	}

	render() {
		// const notes = [
		// 	{ id: 1, name: "Grocery list", content: `Bananas\nApples\nTomatoes\nPotatoes\nOats\nCandy\nBread` },
		// ];
		
		return (
			<div className="view home">
				<header>
					<Link to="/"><Icon name="back" /></Link>
					<h1>Your notes</h1>
					<button><Icon name="settings" /></button>
				</header>
				<div className="content">
					{this.state.notes.map(note => (
						<Link key={note.id} className="note" to={`/notes/${note.id}`}>
							<h2>{note.name}</h2>
							<p>{note.content}</p>
						</Link>
					))}
				</div>
			</div>
		);
	}
}