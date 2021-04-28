import { connect } from 'react-redux';
import FullScreen from './FullScreen';
import fullscreenAction from '../../actions/fullscreenAction';
import { GlobalState } from '../../redux/redux-store';

const mapStateToProps = (state: GlobalState) => ({
	status: state.fullScreenHandler.full,
});

const {
	setFullScreenStatus,
} = fullscreenAction;

const FullScreenContainer = connect(mapStateToProps, {
	setFullScreenStatus,
})(FullScreen);

export default FullScreenContainer;
