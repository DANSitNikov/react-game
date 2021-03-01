import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = (state) => ({
	language: state.changeLang,
	mode: state.styleMode.mode,
});

const HeaderContainer = connect(mapStateToProps, {})(Header);

export default HeaderContainer;
