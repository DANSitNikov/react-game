import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import changeLangAction from '../../actions/changeLangAction';
import styleModeAction from '../../actions/styleModeAction';
import { GlobalState } from '../../redux/redux-store';

const HeaderGetData: React.FC<any> = (props) => {
  useEffect(() => {
    if (localStorage) {
      if (localStorage.getItem('gameLanguage')) {
        const lang = JSON.parse(localStorage.getItem('gameLanguage')!);
        if (lang === 'rus') {
          props.setRus();
        } else {
          props.setEng();
        }
      }

      if (localStorage.getItem('gameMode')) {
        const mode = JSON.parse(localStorage.getItem('gameMode')!);
        props.toggleMode(mode);
      }
    }
  }, []);

  return <Header {...props} />;
};

const mapStateToProps = (state: GlobalState) => ({
  language: state.changeLang,
  mode: state.styleMode.mode,
  aboutGameBtn: state.buttonsHandler.aboutGameBtn,
  gameBtn: state.buttonsHandler.gameBtn,
  recordsBtn: state.buttonsHandler.recordsBtn,
  settingsBtn: state.buttonsHandler.settingsBtn,
});

const { setRus, setEng } = changeLangAction;

const { toggleMode } = styleModeAction;

const HeaderContainer = connect(mapStateToProps, {
  setRus,
  setEng,
  toggleMode,
})(HeaderGetData);

export default HeaderContainer;
