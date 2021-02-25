import { connect } from 'react-redux';
import { finishedGame, setFieldStatus, winnerGame } from '../../../redux/gameReducer';
import { setOpenCells } from '../../../redux/currentGameStatisticReducer';
import Game from './Game';

const mapStateToProps = (state) => ({
	number: state.gamePage.chosenLevel,
	gameStatus: state.gamePage.disableField,
	openCells: state.currentGameStatistic.openCells,
});

const GameContainer = connect(mapStateToProps, {
	setFieldStatus,
	setOpenCells,
	finishedGame,
	winnerGame,
})(Game);

export default GameContainer;
