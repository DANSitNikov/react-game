import React, { useEffect } from 'react';
import Records from './Records';
import { setAverageLevel, setEasyLevel, setHardLevel, setImpossibleLevel } from '../../redux/recordsReducer';

const { connect } = require('react-redux');

const RecordsGetData = (props) => {
	const {	setEasyLevel, setAverageLevel,
		setHardLevel, setImpossibleLevel } = props;

	useEffect(() => {
		setEasyLevel(JSON.parse(localStorage.getItem('recordeasy')))
		setAverageLevel(JSON.parse(localStorage.getItem('recordaverage')))
		setHardLevel(JSON.parse(localStorage.getItem('recordhard')))
		setImpossibleLevel(JSON.parse(localStorage.getItem('recordimpossible')))
	}, []);

	return <Records {...props} />
};

const mapStateToProps = (state) => ({
	easyLevel: state.recordsPage.easyLevel,
	averageLevel: state.recordsPage.averageLevel,
	hardLevel: state.recordsPage.hardLevel,
	impossibleLevel: state.recordsPage.impossibleLevel,
});

const RecordsContainer = connect(mapStateToProps, {
	setEasyLevel,
	setAverageLevel,
	setHardLevel,
	setImpossibleLevel,
})(RecordsGetData);

export default RecordsContainer;
