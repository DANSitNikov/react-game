import { connect } from 'react-redux';
import AboutGame from './AboutGame';

const mapStateToProps = (state) => ({
	language: state.changeLang,
});

const mapDispatchToProps = () => ({});

const AboutGameContainer = connect(mapStateToProps, mapDispatchToProps)(AboutGame);

export default AboutGameContainer;
