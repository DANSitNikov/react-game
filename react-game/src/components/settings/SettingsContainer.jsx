import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Settings from './Settings';
import { setEng, setRus } from '../../redux/changeLanguageReducer';
import { toggleMode } from '../../redux/styleModeReducer';
import { changeMusicVolume, changeSoundVolume } from '../../redux/soundReducer';
import { setAngryDragon, setFriendDragon } from '../../redux/chooseTheDragonReducer';

const SettingsDefaultValues = (props) => {
	useEffect(() => {
		if (localStorage.getItem('musicVolume')) {
			const music = JSON.parse(localStorage.getItem('musicVolume'));
			props.changeMusicVolume(music);
		}

		if (localStorage.getItem('soundVolume')) {
			const sound = JSON.parse(localStorage.getItem('soundVolume'));
			props.changeSoundVolume(sound);
		}

		if (localStorage.getItem('friendDragon')) {
			const dragonValue = JSON.parse(localStorage.getItem('friendDragon'));
			props.setFriendDragon(dragonValue);
		}

		if (localStorage.getItem('angryDragon')) {
			const dragonValue = JSON.parse(localStorage.getItem('angryDragon'));
			props.setAngryDragon(dragonValue);
		}
	}, []);

	return <Settings {...props} />;
};

const mapStateToProps = (state) => ({
	lang: state.changeLang,
	mode: state.styleMode.mode,
	sound: state.soundSettings.sound,
	music: state.soundSettings.music,
	friend: state.chooseDragon.friend,
	bomb: state.chooseDragon.bomb,
});

const SettingsContainer = connect(mapStateToProps, {
	setEng,
	setRus,
	toggleMode,
	changeMusicVolume,
	changeSoundVolume,
	setFriendDragon,
	setAngryDragon,
})(SettingsDefaultValues);

export default SettingsContainer;
