import React from 'react';
import { createBombs } from '../../actions/gameAction';

interface Props {
  allCells: number;
  openCells: number;
}

const OpenCells: React.FC<Props> = (props) => {
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
