import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AudioCreator from './Audio';
import { changeMusicVolume } from '../../redux/soundReducer';
import { setEng, setRus } from '../../redux/changeLanguageReducer';
import { toggleMode } from '../../redux/styleModeReducer';

const AudioGetVolume = (props) => {
	useEffect(() => {
		if (localStorage) {
			if (localStorage.getItem('musicVolume')) {
				const music = JSON.parse(localStorage.getItem('musicVolume'));
				props.changeMusicVolume(music);
			}

			if (localStorage.getItem('gameLanguage')) {
				const lang = JSON.parse(localStorage.getItem('gameLanguage'));
				if (lang === 'rus') {
					props.setRus();
				} else {
					props.setEng();
				}
			}

			if (localStorage.getItem('gameMode')) {
				const mode = JSON.parse(localStorage.getItem('gameMode'));
				props.toggleMode(mode);
			}
		}
	}, []);

	return <AudioCreator {...props} />;
};

const mapStateReducer = (state) => ({
	mode: state.styleMode.mode,
	music: state.soundSettings.music,
});

const AudioContainer = connect(mapStateReducer, {
	changeMusicVolume,
	setRus,
	setEng,
	toggleMode,
})(AudioGetVolume);

export default AudioContainer;
