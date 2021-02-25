import { connect } from 'react-redux';
import Timer from './Timer';
import { setSeconds } from '../../redux/currentGameStatisticReducer';

const mapStateToProps = (state) => ({
	finishedGame: state.gamePage.finishedGame,
	number: state.gamePage.chosenLevel,
	victoryGame: state.gamePage.victoryGame,
});

const TimerContainer = connect(mapStateToProps, {
	setSeconds,
})(Timer);

export default TimerContainer;
