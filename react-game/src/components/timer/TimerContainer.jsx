import { connect } from 'react-redux';
import Timer from './Timer';

const mapStateToProps = (state) => ({
	finishedGame: state.gamePage.finishedGame,
});

const TimerContainer = connect(mapStateToProps, {})(Timer);

export default TimerContainer;
