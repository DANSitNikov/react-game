import React from "react";
import { Button } from "react-bootstrap";

const Game = (props) => {
	return (
		<div>
			{ props.location.state.num }
			<Button variant="outline-success">Start the game</Button>
		</div>
	)
}

export default Game;