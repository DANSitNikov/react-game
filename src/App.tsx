import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import HeaderContainer from './components/header/HeaderContainer';
import SettingsContainer from './components/settings/SettingsContainer';
import GameContainer from './components/chooseTheGame/game/GameContainer';
import RecordsContainer from './components/records/RecordsContainer';
import Footer from './components/footer/Footer';
import AudioContainer from './components/backAudio/AudioContainer';
import FullScreenContainer from './components/fullScreen/FullScreenContainer';
import AboutGame from './components/aboutGame/AboutGame';
import ChooseTheGame from './components/chooseTheGame/ChooseTheGame';

const App = () => (
  <Router>
    <div className="app">
      <HeaderContainer />
      <div>
        <Route path="/about-game" render={() => <AboutGame />} />
        <Route exact path="/game" render={() => <ChooseTheGame />} />
        <Route path="/records" render={() => <RecordsContainer />} />
        <Route path="/settings" render={() => <SettingsContainer />} />
        <Route path="/easy-level" render={() => <GameContainer />} />
        <Route path="/average-level" render={() => <GameContainer />} />
        <Route path="/hard-level" render={() => <GameContainer />} />
        <Route path="/impossible-level" render={() => <GameContainer />} />
        <Redirect to="/about-game" from="/" />
      </div>
      <Footer />
      <AudioContainer />
      <FullScreenContainer />
    </div>
  </Router>
);

export default App;
