import React from "react";
import { useParams, Link } from "react-router-dom";

import Icon from "../components/Icon";
import "./Note.sass";

export default function Note() {
	// const { noteId } = useParams();
	const note = {
		name: "Grocery list",
		content: `Bananas\nApples\nTomatoes\nPotatoes\nOats\nCandy\nBread`
	};
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