import React, { useContext, useState, useEffect } from 'react';
import '../board/board.scss';
import { UserContext } from 'client/context';
import { IUser } from 'client/types/user-form-state';
import { useWinState } from 'client/utils/useWinState';
import { WinningMessage } from '../winning-message/winning-message';

const cells: number[] = Array.from(Array(9).keys());

export const Board: React.FC = () => {
  const { state, setUserWin } = useContext(UserContext);
  // const [formState, setFormState] = useState<IUser>({
  //   descript: '',
  //   username: '',
  //   team: '',
  //   winner: false,
  // });

  const winningTeam = useWinState(null);

  const [cross, setCross] = useState<boolean>(false);
  const [naught, setNaught] = useState<boolean>(false);
  const [gameRunning, setGameRunning] = useState<boolean>(true);

  useEffect(() => {
    ///If 3 crosses or X's in a row
    //
    // setGameRunning(false)
    //setwinState(crosses or naughts)
    //
    //if state.user.team === winningTeam setUserWin(true) : setUserWin(false)
  }, [gameRunning]);

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
      <button onClick={() => console.log(state)}>BOARD STATE</button>
      {/* SET USER WIN MAY BE SUPERFLUOUS */}
      <button onClick={() => setUserWin(true)}>U WIN</button>
      <button onClick={() => setUserWin(false)}>U LOSE</button>
      <button onClick={() => console.log(winningTeam)}>WinningTEAM</button>
      <button onClick={() => setGameRunning(false)}>Game Finished</button>
      {!gameRunning && (
        <WinningMessage
          winningTeam={winningTeam}
          setGameRunning={setGameRunning}
        />
      )}
    </>
  );
};
