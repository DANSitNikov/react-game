import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import changeLangAction from '../../actions/changeLangAction';
import styleModeAction from '../../actions/styleModeAction';
import soundAction from '../../actions/soundAction';
import chooseTheDragonAction from '../../actions/chooseTheDragonAction';
import Settings from './Settings';

const SettingsContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage) {
      if (localStorage.getItem('musicVolume')) {
        const music: number = JSON.parse(localStorage.getItem('musicVolume')!);
        dispatch(soundAction.changeMusicVolume(music));
      }

      if (localStorage.getItem('soundVolume')) {
        const sound: number = JSON.parse(localStorage.getItem('soundVolume')!);
        dispatch(soundAction.changeSoundVolume(sound));
      }

      if (localStorage.getItem('friendDragon')) {
        const dragonValue: boolean = JSON.parse(
          localStorage.getItem('friendDragon')!,
        );
        dispatch(chooseTheDragonAction.setFriendDragon(dragonValue));
      }

      if (localStorage.getItem('angryDragon')) {
        const dragonValue: boolean = JSON.parse(
          localStorage.getItem('angryDragon')!,
        );
        dispatch(chooseTheDragonAction.setAngryDragon(dragonValue));
      }

      if (localStorage.getItem('gameLanguage')) {
        const lang: string = JSON.parse(localStorage.getItem('gameLanguage')!);
        if (lang === 'rus') {
          dispatch(changeLangAction.setRus());
        } else {
          dispatch(changeLangAction.setEng());
        }
      }

      if (localStorage.getItem('gameMode')) {
        const mode: string = JSON.parse(localStorage.getItem('gameMode')!);
        dispatch(styleModeAction.toggleMode(mode));
      }
    }
  }, []);

  return <Settings />;
};

export default SettingsContainer;
