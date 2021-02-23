import { connect } from 'react-redux';
import { finishedGame, setFieldStatus } from '../../../redux/gameReducer';
import { setOpenCells } from '../../../redux/currentGameStatisticReducer';
import Game from './Game';

const mapStateToProps = (state) => ({
	number: state.gamePage.chosenLevel,
	gameStatus: state.gamePage.disableField,
});

const GameContainer = connect(mapStateToProps, {
	setFieldStatus,
	setOpenCells,
	finishedGame,
})(Game);

export default GameContainer;
