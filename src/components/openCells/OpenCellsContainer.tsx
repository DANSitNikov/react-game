import OpenCells from './OpenCells';
import { GlobalState } from '../../redux/redux-store';

const { connect } = require('react-redux');

const mapStateToProps = (state: GlobalState) => ({
  openCells: state.currentGameStatistic.openCells,
  allCells: state.gamePage.chosenLevel,
});

const OpenCellsContainer = connect(mapStateToProps, {})(OpenCells);

export default OpenCellsContainer;
