import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './header.module.scss';
import angry from '../../assets/images/backs/angryDragons.jpg';
import friend from '../../assets/images/backs/friendlyDragons.jpg';
import { Button } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const createBack = (mode) => {
	if (mode === 'friendly') {
		document.body.style.backgroundImage = `url(${friend})`;
	} else {
		document.body.style.backgroundImage = `url(${angry})`;
	}
};

const Header = (props) => {
	const { language, mode } = props;
	const [anchorEl, setAnchorEl] = React.useState(null);
	const color = mode === 'friendly' ? 'primary' : 'secondary';

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	let element;

	Object.keys(language.language).forEach((key) => {
		if (key === props.language.langStatus) {
			element = [
				<NavLink onClick={handleClose} to="/aboutGame" activeClassName={style.active}><Button variant="contained" color={color}>
					{props.language.language[key].aboutGameHeader}
				</Button></NavLink>,
				<NavLink onClick={handleClose} to="/game" activeClassName={style.active}><Button variant="contained" color={color}>
					{props.language.language[key].startTheGameHeader}
				</Button></NavLink>,
				<NavLink onClick={handleClose} to="/records" activeClassName={style.active}><Button variant="contained" color={color}>
					{props.language.language[key].recordsHeader}
				</Button></NavLink>,
				<NavLink onClick={handleClose} to="/settings" activeClassName={style.active}><Button variant="contained" color={color}>
					{props.language.language[key].settingsHeader}
				</Button></NavLink>,
			];
		}
	});

	createBack(mode);

	return (
		<>
			<div className={style.header}>
				{ element }
			</div>

			<AppBar variant="contained" color={color} className={style.buttonsPhoneMenu} position="static">
				<Toolbar>
					<IconButton onClick={handleClick} edge="start"  color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>


			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepmounted="true"
				open={Boolean(anchorEl)}
				onClose={handleClose}
				className={style.phoneMenu}
			>
				{ element }
			</Menu>
		</>
	);
};

export default Header;
