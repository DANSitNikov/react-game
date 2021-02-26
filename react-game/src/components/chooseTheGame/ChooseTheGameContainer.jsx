import { connect } from 'react-redux';
import ChooseTheGame from './ChooseTheGame';
import {
	chooseLevel, finishedGame, setFieldStatus, winnerGame,
} from '../../redux/gameReducer';
import { setOpenCellsToZero } from '../../redux/currentGameStatisticReducer';

const mapStateToProps = () => ({});

const ChooseTheGameContainer = connect(mapStateToProps, {
	chooseLevel,
	setFieldStatus,
	setOpenCellsToZero,
	finishedGame,
	winnerGame,
})(ChooseTheGame);

export default ChooseTheGameContainer;
