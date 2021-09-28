import React from 'react';

export const Board: React.FC = () => {
  const cells = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="board">
      {' '}
      <table>
        {cells.map((block) =>
          block % 3 === 1 ? (
            <tr className="firstrow">
              <td className="cell" data-cell key={block}>
                {block}
              </td>
            </tr>
          ) : (
            <tr className="secondrow">
              <td className="cell" data-cell key={block}>
                {block}
              </td>
            </tr>
          ),
        )}{' '}
      </table>
    </div>
  );
};
