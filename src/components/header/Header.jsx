import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './header.module.scss';

const Header = () => (
	<div className={style.header}>
		<NavLink to="/aboutGame" activeClassName={style.active}>About game</NavLink>
		<NavLink to="/game" activeClassName={style.active}>Start game</NavLink>
		<NavLink to="/settings" activeClassName={style.active}>Settings</NavLink>
	</div>
);

export default Header;
