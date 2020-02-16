const express = require("express");
const app = express();
const cors = require("cors");

const port = 3001;

app.use(cors());

app.get("/notes", (req, res) => {
	const notes = require("./notes.json");
	res.send(notes);
});

app.get("/notes/:id", (req, res) => {
	const notes = require("./notes.json");
	const note = notes.find(n => n.id === parseInt(req.params.id));
	res.send(note);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));