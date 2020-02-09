import React from "react";

/* Icons downloaded from https://material.io/resources/icons/ */
import ArrowBackIcon from "../icons/arrow_back.svg";
import MoreVertIcon from "../icons/more_vert.svg";
import SettingsIcon from "../icons/settings.svg";

import "./Icon.sass";

export default function(props) {
	const Component = getComponent(props.name);
	return <Component className="icon" />
}

function getComponent(name) {
	switch (name) {
		case "back":
			return ArrowBackIcon;
		case "more":
			return MoreVertIcon;
		case "settings":
			return SettingsIcon;
		default:
			throw new Error("No such icon!");
	}
}