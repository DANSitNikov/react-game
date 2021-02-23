import OpenCells from './OpenCells';

const { connect } = require('react-redux');

const mapStateToProps = (state) => ({
	openCells: state.currentGameStatistic.openCells,
	allCells: state.gamePage.chosenLevel,
});

const OpenCellsContainer = connect(mapStateToProps, {})(OpenCells);

export default OpenCellsContainer;
