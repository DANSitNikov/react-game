import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ChooseTheGame from "./components/chooseTheGame/ChooseTheGame";
import Game from "./components/chooseTheGame/game/Game";
import HeaderContainer from "./components/header/HeaderContainer";
import SettingsContainer from "./components/settings/SettingsContainer";
import AboutGameContainer from "./components/aboutGame/AboutGameContainer";

const App = () => {
	return (
		<Router>
			<div className="app">
				<HeaderContainer />
				<div>
					<Route path="/aboutGame" render={() => <AboutGameContainer />} />
					<Route exact path="/game" render={() => <ChooseTheGame />} />
					<Route path="/settings" render={() => <SettingsContainer />} />
					<Route path="/game/:id" render={(props) => <Game {...props} /> }/>
				</div>
			</div>
		</Router>
	);
};

export default App;
