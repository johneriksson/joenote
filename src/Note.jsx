import React from "react"

import {
	useParams
} from "react-router-dom";

export default function Note() {
	const { noteId } = useParams();
	return (
		<div className="note">
			Note id: {noteId}
		</div>
	);
}