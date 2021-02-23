import { connect } from 'react-redux';
import Settings from './Settings';
import { setEng, setRus } from '../../redux/changeLanguageReducer';

const mapStateToProps = (state) => ({
	lang: state.changeLang.langStatus,
});

const SettingsContainer = connect(mapStateToProps, {
	setEng, setRus,
})(Settings);

export default SettingsContainer;
