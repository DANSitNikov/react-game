import Settings from "./Settings";
import { connect } from "react-redux";
import { engAC, rusAC } from "../../redux/changeLanguageReducer";

const mapStateToProps = (state) => {
	return {
		lang: state.changeLang.langStatus,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		rus: () => {
			dispatch(rusAC());
		},
		eng: () => {
			dispatch(engAC());
		}
	}
}


const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings);

export default SettingsContainer;