import React from 'react';
import { createBombs } from '../../redux/gameReducer';

const OpenCells = (props) => {
	const { allCells, openCells } = props;
	const bombs = [...createBombs(allCells)];
	const allCellsContent = allCells - bombs.length;

	return (
		<div>
			<span>{openCells}</span>
			<span>/</span>
			<span>{allCellsContent}</span>
		</div>
	);
};

export default OpenCells;
