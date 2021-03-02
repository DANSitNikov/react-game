import { connect } from 'react-redux';
import ChooseTheGame from './ChooseTheGame';
import {
	chooseLevel, finishedGame, setFieldStatus, winnerGame,
} from '../../redux/gameReducer';
import { setOpenCellsHackedToZero, setOpenCellsToZero } from '../../redux/currentGameStatisticReducer';
import { changeAutoGameStatus, changeAutoWinGameStatus, changeShowBombsBtnStatus } from '../../redux/buttonsReducer';

const mapStateToProps = () => ({});

const ChooseTheGameContainer = connect(mapStateToProps, {
	chooseLevel,
	setFieldStatus,
	setOpenCellsToZero,
	finishedGame,
	winnerGame,
	changeShowBombsBtnStatus,
	changeAutoGameStatus,
	changeAutoWinGameStatus,
	setOpenCellsHackedToZero,
})(ChooseTheGame);

export default ChooseTheGameContainer;
