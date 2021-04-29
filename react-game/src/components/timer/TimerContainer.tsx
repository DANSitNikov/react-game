import { connect } from 'react-redux';
import Timer from './Timer';
import currentGameStatisticAction from '../../actions/currentGameStatisticAction';
import { GlobalState } from '../../redux/redux-store';

const mapStateToProps = (state: GlobalState) => ({
	finishedGame: state.gamePage.finishedGame,
	number: state.gamePage.chosenLevel,
	victoryGame: state.gamePage.victoryGame,
});

const {
	setSeconds,
} = currentGameStatisticAction;

const TimerContainer = connect(mapStateToProps, {
	setSeconds,
})(Timer);

export default TimerContainer;
