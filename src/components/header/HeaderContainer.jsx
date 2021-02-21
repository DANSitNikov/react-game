import Header from "./Header";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		language: state.changeLang,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;