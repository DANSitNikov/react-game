import React from "react";
import { Button } from "react-bootstrap";

const Settings = (props) => {
	const changeLang = props.lang === 'rus'
		? <Button onClick={props.eng}>сменить на английский</Button>
		: <Button onClick={props.rus}>change to russian</Button>

	return (
		<div>
			{ changeLang }
		</div>
	)
}

export default Settings;
