import React, { useContext, useState, useEffect, useCallback } from 'react';
import { UserContext } from 'client/context';
import { IUser } from 'client/types/user-form-state';
import { useWinState } from 'client/utils/useWinState';
import { WinningMessage } from '../winning-message/winning-message';
import '../board/board.scss';
import { CellContainer } from './board.styles';
import { Cell } from './cell';
import { TeamType } from 'client/types/enums';

interface ICellMap {
  cellClicked: number;
  teamClicked?: TeamType;
}

export const Board: React.FC = () => {
  const { state, setUserWin, setUserTeam } = useContext(UserContext);
  useCallback(
    () => (Math.random() > 0.5 ? setUserTeam(true) : setUserTeam(false)),
    [],
  );

  const gridArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  //passing in initial winning team as always losing loooool
  const winningTeam = useWinState((state.user?.team as TeamType) === 1 ? 2 : 1);
  const [cellIndex, setCellIndex] = useState<number>(-1);
  const [cellState, setCellState] = useState(() =>
    Array.from(Array(9).keys()).map(() => TeamType.DEFAULT),
  );

  const cellsClicked: [ICellMap?] = [];

  const [gameRunning, setGameRunning] = useState<boolean>(true);

  useEffect(() => {
    ///If 3 crosses or X's in a row
    if (TeamType.CROSS) {
      console.log('crossssssss', TeamType.CROSS);
    }
    console.log('winning team is', winningTeam);

    //
    //if state.user.team === winningTeam setUserWin(true) : setUserWin(false)
  }, []);

  // const userCellType =
  //   state.user?.team === userTeam ? TeamType.CROSS : TeamType.NAUGHT;

  const onCellHover = useCallback((nextIndex: number) => {
    // console.log(nextIndex);
    // console.log(state.user?.team);
    // console.log('cellindex', nextIndex);
    setCellIndex(nextIndex);
  }, []);

  const onCellClick = useCallback((nextIndex: number, type?: TeamType) => {
    type &&
      setCellState((prev) =>
        prev.map((cell, index) => (index === nextIndex ? type : cell)),
      );
    let selected = () => {
      if (nextIndex <= 2)
        return cellsClicked.push({
          cellClicked: gridArray[0][nextIndex],
          teamClicked: type,
        });
      if (nextIndex <= 5)
        return cellsClicked.push({
          cellClicked: gridArray[1][nextIndex % 3],
          teamClicked: type,
        });
      if (nextIndex <= 8)
        return cellsClicked.push({
          cellClicked: gridArray[2][nextIndex % 6],
          teamClicked: type,
        });
    };
    selected();
    console.log('cellstate', cellState);
    console.log('grid array', gridArray);
    console.log('clicked cells', cellsClicked);
  }, []);

  return (
    <>
      <CellContainer onMouseLeave={() => onCellHover(-1)}>
        {cellState.map((cell, ind) => (
          <Cell
            key={ind}
            onCellClick={() => onCellClick(ind, state.user?.team)}
            onMouseOver={() => onCellHover(ind)}
            hoverType={ind === cellIndex ? state.user?.team : TeamType.DEFAULT}
            type={cell}
          />
        ))}
      </CellContainer>
      <button onClick={() => console.log(cellsClicked)}>CLICKED CELLS</button>
      {/* SET USER WIN MAY BE SUPERFLUOUS */}
      <button
        onClick={() => {
          setUserWin(true);
          console.log(state);
        }}
      >
        U WIN
      </button>
      <button
        onClick={() => {
          setUserWin(false);
          console.log(state);
        }}
      >
        U LOSE
      </button>
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
