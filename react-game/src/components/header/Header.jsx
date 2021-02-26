import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './header.module.scss';
import angry from '../../assets/images/backs/angryDragons.jpg';
import friend from '../../assets/images/backs/friendlyDragons.jpg';

const createBack = (mode) => {
	if (mode === 'friendly') {
		document.body.style.backgroundImage = `url(${friend})`;
	} else {
		document.body.style.backgroundImage = `url(${angry})`;
	}
};

const Header = (props) => {
	const { language, mode } = props;
	let element;

	console.log(mode);

	Object.keys(language.language).forEach((key) => {
		if (key === props.language.langStatus) {
			element = [
				<NavLink to="/aboutGame" activeClassName={style.active}>{props.language.language[key].aboutGameHeader}</NavLink>,
				<NavLink to="/game" activeClassName={style.active}>{props.language.language[key].startTheGameHeader}</NavLink>,
				<NavLink to="/records" activeClassName={style.active}>{props.language.language[key].recordsHeader}</NavLink>,
				<NavLink to="/settings" activeClassName={style.active}>{props.language.language[key].settingsHeader}</NavLink>,
			];
		}
	});

	createBack(mode);

	return (
		<div className={style.header}>
			{ element }
		</div>
	);
};

export default Header;
