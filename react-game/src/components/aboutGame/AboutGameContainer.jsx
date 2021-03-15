import { connect } from 'react-redux';
import AboutGame from './AboutGame';

const mapStateToProps = (state) => ({
	language: state.changeLang,
});

const AboutGameContainer = connect(mapStateToProps)(AboutGame);

export default AboutGameContainer;
