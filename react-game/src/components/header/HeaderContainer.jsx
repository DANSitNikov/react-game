import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = (state) => ({
	language: state.changeLang,
});

const HeaderContainer = connect(mapStateToProps, {})(Header);

export default HeaderContainer;