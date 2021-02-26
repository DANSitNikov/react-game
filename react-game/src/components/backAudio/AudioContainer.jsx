import connect from 'react-redux/lib/connect/connect';
import AudioCreator from './Audio';

const mapStateReducer = (state) => ({
	mode: state.styleMode.mode,
	music: state.soundSettings.music,
});

const AudioContainer = connect(mapStateReducer, {

})(AudioCreator);

export default AudioContainer;
