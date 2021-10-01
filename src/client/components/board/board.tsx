import React from 'react';
import { NavLink } from 'react-router-dom';
import '../board/board.scss';

export const Board: React.FC = () => {
  const cells: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="board">
      <table>
        <thead>
          <tr>
            {cells.map((next, ind) => (
              <th key={ind}>{next}</th>
            ))}
          </tr>
        </thead>
      </table>
      <NavLink to="/" activeClassName="boardLink">
        <button>Return to login</button>
      </NavLink>
    </div>
  );
};
