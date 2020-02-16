import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import Icon from "../components/Icon";
import "./Note.sass";

@withRouter
export default class Note extends React.Component {
	state = {
		note: {},
	}

	componentDidMount() {
		console.log("this.props", this.props)
		fetch(`http://localhost:3001/notes/${this.props.match.params.noteId}`)
			.then(res => res.json())
			.then(note => this.setState({ note }));
	}

	render() {
		// const note = {
		// 	name: "Grocery list",
		// 	content: `Bananas\nApples\nTomatoes\nPotatoes\nOats\nCandy\nBread`
		// };
		const note = this.state.note;
		return (
			<div className="view note">
				{/*Note id: {noteId}*/}
				<header>
					<Link to="/"><Icon name="back" /></Link>
					<h1>{note.name}</h1>
					<button><Icon name="more" /></button>
				</header>
				<div className="content">
					{note.content}
				</div>
			</div>
		);
	}
}