import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = (state) => ({
	language: state.changeLang,
	mode: state.styleMode.mode,
	aboutGameBtn: state.buttonsHandler.aboutGameBtn,
	gameBtn: state.buttonsHandler.gameBtn,
	recordsBtn: state.buttonsHandler.recordsBtn,
	settingsBtn: state.buttonsHandler.settingsBtn,
});

const HeaderContainer = connect(mapStateToProps, {})(Header);

export default HeaderContainer;
