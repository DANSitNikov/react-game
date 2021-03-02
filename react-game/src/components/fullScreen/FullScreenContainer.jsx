import FullScreen from './FullScreen';
import { setFullScreenStatus } from '../../redux/fullScreenReducer';

const { connect } = require('react-redux');
const mapStateToProps = (state) => ({
	status: state.fullScreenHandler.full,
});

const FullScreenContainer = connect(mapStateToProps, {
	setFullScreenStatus,
})(FullScreen);

export default FullScreenContainer;