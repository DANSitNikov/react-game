import AboutGame from "./AboutGame";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		language: state.changeLang,
	};
};

const mapDispatchToProps = () => ({});

const AboutGameContainer = connect(mapStateToProps, mapDispatchToProps)(AboutGame);

export default AboutGameContainer;