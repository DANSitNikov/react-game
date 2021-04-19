import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import AudioCreator from './Audio';
import { changeMusicVolume } from '../../redux/soundReducer';
import { setEng, setRus } from '../../redux/changeLanguageReducer';
import { toggleMode } from '../../redux/styleModeReducer';

const AudioContainer = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage) {
			if (localStorage.getItem('musicVolume')) {
				const music = JSON.parse(localStorage.getItem('musicVolume'));
				dispatch(changeMusicVolume(music));
			}

			if (localStorage.getItem('gameLanguage')) {
				const lang = JSON.parse(localStorage.getItem('gameLanguage'));
				if (lang === 'rus') {
					dispatch(setRus());
				} else {
					dispatch(setEng());
				}
			}

			if (localStorage.getItem('gameMode')) {
				const mode = JSON.parse(localStorage.getItem('gameMode'));
				dispatch(toggleMode(mode));
			}
		}
	}, []);

	return <AudioCreator />;
};

export default AudioContainer;
