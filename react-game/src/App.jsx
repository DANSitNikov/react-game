import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeaderContainer from './components/header/HeaderContainer';
import SettingsContainer from './components/settings/SettingsContainer';
import AboutGameContainer from './components/aboutGame/AboutGameContainer';
import ChooseTheGameContainer from './components/chooseTheGame/ChooseTheGameContainer';
import GameContainer from './components/chooseTheGame/game/GameContainer';

const App = () => (
	<Router>
		<div className="app">
			<HeaderContainer />
			<div>
				<Route path="/aboutGame" render={() => <AboutGameContainer />} />
				<Route exact path="/game" render={() => <ChooseTheGameContainer />} />
				<Route path="/settings" render={() => <SettingsContainer />} />
				<Route path="/easyLevel" render={() => <GameContainer />} />
				<Route path="/averageLevel" render={() => <GameContainer />} />
				<Route path="/hardLevel" render={() => <GameContainer />} />
				<Route path="/impossibleLevel" render={() => <GameContainer />} />
			</div>
		</div>
	</Router>
);

export default App;
