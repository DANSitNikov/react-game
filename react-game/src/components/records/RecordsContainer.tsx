import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Records from './Records';
import recordsAction from '../../actions/recordsAction';
import changeLangAction from '../../actions/changeLangAction';
import styleModeAction from '../../actions/styleModeAction';
import { GlobalState } from '../../redux/redux-store';

const RecordsGetData: React.FC<any> = (props) => {
	useEffect(() => {
		props.setEasyLevel(JSON.parse(localStorage.getItem('recordeasy')!));
		props.setAverageLevel(JSON.parse(localStorage.getItem('recordaverage')!));
		props.setHardLevel(JSON.parse(localStorage.getItem('recordhard')!));
		props.setImpossibleLevel(JSON.parse(localStorage.getItem('recordimpossible')!));

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

	return <Records {...props} />;
};

const mapStateToProps = (state: GlobalState) => ({
	easyLevel: state.recordsPage.easyLevel,
	averageLevel: state.recordsPage.averageLevel,
	hardLevel: state.recordsPage.hardLevel,
	impossibleLevel: state.recordsPage.impossibleLevel,
	language: state.changeLang,
});

const {
	setAverageLevel, setEasyLevel, setHardLevel, setImpossibleLevel,
} = recordsAction;

const {
	toggleMode,
} = styleModeAction;

const {
	setRus,
	setEng,
} = changeLangAction;

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
