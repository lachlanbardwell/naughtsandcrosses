import React from 'react';
import '../board/board.scss';

export const Board: React.FC = () => {
  const cells: number[] = Array.from(Array(9).keys());

  return (
    <div className="board">
      {cells.map((cell) => (
        <div key={cell} className="cells"></div>
      ))}
    </div>
  );
};
