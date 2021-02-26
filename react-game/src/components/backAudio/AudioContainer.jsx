const { connect } = require('react-redux');
import AudioCreator from './Audio';

const mapStateReducer = (state) => ({
	mode: state.styleMode.mode,
	music: state.soundSettings.music,
});

const AudioContainer = connect(mapStateReducer, {

})(AudioCreator);

export default AudioContainer;
