import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setEng, setRus } from '../../redux/changeLanguageReducer';
import { toggleMode } from '../../redux/styleModeReducer';

const HeaderGetData = (props) => {
	useEffect(() => {
		if (localStorage) {
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

	return <Header {...props} />;
};

const mapStateToProps = (state) => ({
	language: state.changeLang,
	mode: state.styleMode.mode,
	aboutGameBtn: state.buttonsHandler.aboutGameBtn,
	gameBtn: state.buttonsHandler.gameBtn,
	recordsBtn: state.buttonsHandler.recordsBtn,
	settingsBtn: state.buttonsHandler.settingsBtn,
});

const HeaderContainer = connect(mapStateToProps, {
	setRus,
	setEng,
	toggleMode,
})(HeaderGetData);

export default HeaderContainer;
