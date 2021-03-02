import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Records from './Records';
import {
	setAverageLevel, setEasyLevel, setHardLevel, setImpossibleLevel,
} from '../../redux/recordsReducer';
import { setEng, setRus } from '../../redux/changeLanguageReducer';
import { toggleMode } from '../../redux/styleModeReducer';

const RecordsGetData = (props) => {
	useEffect(() => {
		props.setEasyLevel(JSON.parse(localStorage.getItem('recordeasy')));
		props.setAverageLevel(JSON.parse(localStorage.getItem('recordaverage')));
		props.setHardLevel(JSON.parse(localStorage.getItem('recordhard')));
		props.setImpossibleLevel(JSON.parse(localStorage.getItem('recordimpossible')));

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
	}, []);

	return <Records {...props} />;
};

const mapStateToProps = (state) => ({
	easyLevel: state.recordsPage.easyLevel,
	averageLevel: state.recordsPage.averageLevel,
	hardLevel: state.recordsPage.hardLevel,
	impossibleLevel: state.recordsPage.impossibleLevel,
	language: state.changeLang,
});

const RecordsContainer = connect(mapStateToProps, {
	setEasyLevel,
	setAverageLevel,
	setHardLevel,
	setImpossibleLevel,
	setRus,
	setEng,
	toggleMode,
})(RecordsGetData);

export default RecordsContainer;
