import React, { useContext, useEffect, useState } from 'react';
import '../board/board.scss';
import { UserContext } from 'client/context';
import { IUser } from 'client/types/user-form-state';

const cells: number[] = Array.from(Array(9).keys());

export const Board: React.FC = () => {
  const { state, login } = useContext(UserContext);
  const [teamState, setTeamState] = useState<IUser>({
    descript: state.user?.descript,
    username: state.user?.username,
    team: '',
  });
  const [cross, setCross] = useState<boolean>(false);
  const [naught, setNaught] = useState<boolean>(false);

  useEffect(() => {
    setTeamState(
      Math.random() <= 0.5
        ? {
            ...state.user,
            team: 'Crosses',
          }
        : {
            ...state.user,
            team: 'Naughts',
          },
    );
    console.log(teamState);
  }, []);

  const setMark = () => {
    if (!teamState.team) {
      console.error("team wasn't assigned");
    }
    teamState.team === 'Crosses' ? setCross(true) : setNaught(true);
  };

  return (
    <div className="board">
      {cells.map((cell) => (
        <div key={cell} className="cells" onClick={setMark}></div>
      ))}
      <button onClick={() => console.log(teamState)}>STATE</button>
    </div>
  );
};
