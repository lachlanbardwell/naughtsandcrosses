import React, { useContext, useState } from 'react';
import '../board/board.scss';
import { UserContext } from 'client/context';

const cells: number[] = Array.from(Array(9).keys());

export const Board: React.FC = () => {
  const { state, setUserTeam } = useContext(UserContext);
  const [cross, setCross] = useState<boolean>(false);
  const [naught, setNaught] = useState<boolean>(false);

  const setMark = () => {
    if (!state.user?.team) {
      console.error("team wasn't assigned");
    }
    state.user?.team === 'Crosses' ? setCross(true) : setNaught(true);
  };

  return (
    <div className="board">
      {cells.map((cell) => (
        <div key={cell} className="cells" onClick={setMark}></div>
      ))}
      <button onClick={() => console.log(state)}>STATE</button>
    </div>
  );
};
