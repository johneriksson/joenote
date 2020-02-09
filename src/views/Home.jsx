import React from "react";
import { useParams, Link } from "react-router-dom";

import Icon from "../components/Icon";
import "./Home.sass";

export default function Home() {
	// const { noteId } = useParams();
	const notes = [
		{ id: 1, name: "Grocery list" },
	];
	return (
		<div className="view home">
			<header>
				<Link to="/"><Icon name="back" /></Link>
				<h1>Your notes</h1>
				<button><Icon name="settings" /></button>
			</header>
			<div className="content">
				{notes.map(note => (
					<Link key={note.id} className="note" to={`/notes/${note.id}`}>
						<h2>{note.name}</h2>
					</Link>
				))}
			</div>
		</div>
	);
}