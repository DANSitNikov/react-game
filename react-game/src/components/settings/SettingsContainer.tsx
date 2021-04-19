import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setEng, setRus } from '../../redux/changeLanguageReducer';
import { toggleMode } from '../../redux/styleModeReducer';
import { changeMusicVolume, changeSoundVolume } from '../../redux/soundReducer';
import { setAngryDragon, setFriendDragon } from '../../redux/chooseTheDragonReducer';
import Settings from './Settings';

const SettingsContainer = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage) {
			if (localStorage.getItem('musicVolume')) {
				const music: number = JSON.parse(localStorage.getItem('musicVolume')!);
				dispatch(changeMusicVolume(music));
			}

			if (localStorage.getItem('soundVolume')) {
				const sound: number = JSON.parse(localStorage.getItem('soundVolume')!);
				dispatch(changeSoundVolume(sound));
			}

			if (localStorage.getItem('friendDragon')) {
				const dragonValue: boolean = JSON.parse(localStorage.getItem('friendDragon')!);
				dispatch(setFriendDragon(dragonValue));
			}

			if (localStorage.getItem('angryDragon')) {
				const dragonValue: boolean = JSON.parse(localStorage.getItem('angryDragon')!);
				dispatch(setAngryDragon(dragonValue));
			}

			if (localStorage.getItem('gameLanguage')) {
				const lang: string = JSON.parse(localStorage.getItem('gameLanguage')!);
				if (lang === 'rus') {
					dispatch(setRus());
				} else {
					dispatch(setEng());
				}
			}

			if (localStorage.getItem('gameMode')) {
				const mode: string = JSON.parse(localStorage.getItem('gameMode')!);
				dispatch(toggleMode(mode));
			}
		}
	}, []);

	return <Settings />;
};

export default SettingsContainer;
