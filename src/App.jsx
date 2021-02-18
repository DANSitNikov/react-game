import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/Header';
import AboutGame from './components/aboutGame/AboutGame';
import ChooseTheGame from "./components/chooseTheGame/ChooseTheGame";
import Settings from "./components/settings/Settings";
import Game from "./components/chooseTheGame/game/Game";

const App = () => {
	return (
		<Router>
			<div className="app">
				<Header />
				<div>
					<Route path="/aboutGame" render={() => <AboutGame />} />
					<Route exact path="/game" render={() => <ChooseTheGame />} />
					<Route path="/settings" render={() => <Settings />} />
					<Route path="/game/:id" render={(props) => <Game {...props}/> }/>
				</div>
			</div>
		</Router>
	);
};

export default App;
