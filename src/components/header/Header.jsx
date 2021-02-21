import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './header.module.scss';

const Header = (props) => {
	let element;

	for (let key in props.language.language) {
		if (key === props.language.langStatus) {
			element = [
				<NavLink to="/aboutGame" activeClassName={style.active}>{props.language.language[key].aboutGameHeader}</NavLink>,
				 <NavLink to="/game" activeClassName={style.active}>{props.language.language[key].startTheGameHeader}</NavLink>,
				 <NavLink to="/records" activeClassName={style.active}>{props.language.language[key].recordsHeader}</NavLink>,
				 <NavLink to="/settings" activeClassName={style.active}>{props.language.language[key].settingsHeader}</NavLink>
			];
		}
	}

	return (
		<div className={style.header}>
			{ element }
		</div>
	)
};

export default Header;
