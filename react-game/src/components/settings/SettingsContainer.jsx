import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Settings from './Settings';
import { setEng, setRus } from '../../redux/changeLanguageReducer';
import { toggleMode } from '../../redux/styleModeReducer';
import { changeMusicVolume, changeSoundVolume } from '../../redux/soundReducer';

const SettingsDefaultValues = (props) => {
	useEffect(() => {
		if (localStorage.getItem('musicVolume')) {
			const music = JSON.parse(localStorage.getItem('musicVolume'));
			console.log(music);
			props.changeMusicVolume(music);
		}

		if (localStorage.getItem('soundVolume')) {
			const sound = JSON.parse(localStorage.getItem('soundVolume'));
			props.changeSoundVolume(sound);
		}

		if (localStorage.getItem('languageValue')) {
			console.log('trattaatat');
		}
	}, []);

	return <Settings {...props} />
};

const mapStateToProps = (state) => ({
	lang: state.changeLang.langStatus,
	mode: state.styleMode.mode,
	sound: state.soundSettings.sound,
	music: state.soundSettings.music,
});

const SettingsContainer = connect(mapStateToProps, {
	setEng, setRus, toggleMode,
	changeMusicVolume, changeSoundVolume,
})(SettingsDefaultValues);

export default SettingsContainer;
