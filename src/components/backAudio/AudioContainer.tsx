import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AudioCreator from './Audio';
import soundAction from '../../actions/soundAction';
import changeLangAction from '../../actions/changeLangAction';
import styleModeAction from '../../actions/styleModeAction';

const AudioContainer: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage) {
      if (localStorage.getItem('musicVolume')) {
        const music = JSON.parse(localStorage.getItem('musicVolume')!);
        dispatch(soundAction.changeMusicVolume(music));
      }

      if (localStorage.getItem('gameLanguage')) {
        const lang = JSON.parse(localStorage.getItem('gameLanguage')!);
        if (lang === 'rus') {
          dispatch(changeLangAction.setRus());
        } else {
          dispatch(changeLangAction.setEng());
        }
      }

      if (localStorage.getItem('gameMode')) {
        const mode = JSON.parse(localStorage.getItem('gameMode')!);
        dispatch(styleModeAction.toggleMode(mode));
      }
    }
  }, []);

  return <AudioCreator />;
};

export default AudioContainer;
