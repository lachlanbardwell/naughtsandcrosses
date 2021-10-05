import React, { useContext, useState } from 'react';
import '../board/board.scss';
import { UserContext } from 'client/context';

const cells: number[] = Array.from(Array(9).keys());

export const Board: React.FC = () => {
  const { state } = useContext(UserContext);
  const [cross, setCross] = useState<boolean>(false);
  const [naught, setNaught] = useState<boolean>(false);
  const [gameRunning, setGameRunning] = useState<true>(true);

  const setMark: () => void = () => {
    if (!state.user?.team) {
      console.error("team wasn't assigned");
    }
    state.user?.team === 'Crosses' ? setCross(true) : setNaught(true);
  };

  return (
    <>
      <div className={state.user?.team === 'Crosses' ? 'cross' : 'naught'}>
        {cells.map((cell) => (
          <div className="cells" data-for={cell} key={cell} onClick={setMark}>
            {/* {cross && <p>CROSS</p>}
          {naught && <p>NAUGHT</p>} */}
          </div>
        ))}
      </div>
      <button onClick={() => console.log(state)}>STATE</button>
    </>
  );
};
