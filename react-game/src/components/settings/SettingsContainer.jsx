import { connect } from 'react-redux';
import Settings from './Settings';
import { setEng, setRus } from '../../redux/changeLanguageReducer';
import { toggleMode } from '../../redux/styleModeReducer';

const mapStateToProps = (state) => ({
	lang: state.changeLang.langStatus,
	mode: state.styleMode.mode,
});

const SettingsContainer = connect(mapStateToProps, {
	setEng, setRus, toggleMode,
})(Settings);

export default SettingsContainer;
