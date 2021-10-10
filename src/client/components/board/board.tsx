import React, { useContext, useState, useEffect, useCallback } from 'react';
import { UserContext } from 'client/context';
import { ICellMap } from 'client/context/user-context/types';
import { WinningMessage } from '../winning-message/winning-message';
import '../board/board.scss';
import { CellContainer } from './board.styles';
import { Cell } from './cell';
import { TeamType } from 'client/types/enums';

export const Board: React.FC = () => {
  const { state, setUserWin, setUserTeam } = useContext(UserContext);
  //Initial setting of user team randomly to naughts or crosses
  useCallback(
    () => (Math.random() > 0.5 ? setUserTeam(true) : setUserTeam(false)),
    [],
  );
  //Initial state map of cells to create empty board
  const [cellState, setCellState] = useState(() =>
    Array.from(Array(9).keys()).map(() => TeamType.DEFAULT),
  );
  //Reference for position of each cell from the map
  const [cellIndex, setCellIndex] = useState<number>(-1);

  //State for clearing board on reset
  const [clearBoard, setClearBoard] = useState(false);
  //2d Array to replicate board and check for win conditions
  const gridArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  //State for mapping clicked cells to check for win conditions
  const [cellMap, setCellMap] = useState<ICellMap[]>([
    { cellClicked: -1, teamClicked: -1 },
  ]);

  const [gameRunning, setGameRunning] = useState<boolean>(true);

  useEffect(() => {
    ///If 3 crosses or X's in a row on top row
    if (
      cellMap.find((prev) => prev.cellClicked == 0) &&
      cellMap.find((prev) => prev.cellClicked == 1) &&
      cellMap.find((prev) => prev.cellClicked == 2)
    ) {
      console.log('someone wins!');
      setUserWin(true);
      setGameRunning(false);
    }

    console.log('cellmap', cellMap);
  }, [cellMap]);

  useEffect(() => {
    //reset win checker map and board tiles only when child updates clearboard
    setCellMap([{ cellClicked: -1, teamClicked: -1 }]);
    clearBoard &&
      setCellState(() =>
        Array.from(Array(9).keys()).map(() => TeamType.DEFAULT),
      );
  }, [gameRunning]);

  const onCellHover = useCallback((nextIndex: number) => {
    setCellIndex(nextIndex);
  }, []);

  const onCellClick = (nextIndex: number, type?: TeamType) => {
    type &&
      setCellState((prev) =>
        prev.map((cell, index) => (index === nextIndex ? type : cell)),
      );

    if (nextIndex <= 2) {
      setCellMap((prev: ICellMap[]) => [
        ...prev,
        {
          cellClicked: gridArray[0][nextIndex],
          teamClicked: type,
        },
      ]);
    } else if (nextIndex <= 5) {
      setCellMap((prev: ICellMap[]) => [
        ...prev,
        {
          cellClicked: gridArray[1][nextIndex % 3],
          teamClicked: type,
        },
      ]);
    } else {
      setCellMap((prev: ICellMap[]) => [
        ...prev,
        {
          cellClicked: gridArray[2][nextIndex % 6],
          teamClicked: type,
        },
      ]);
    }
    setClearBoard(false);
    console.log('cellstate', cellState);
  };

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
      <button onClick={() => console.log(state)}>STATE</button>
      <button onClick={() => setGameRunning(false)}>Game Finished</button>
      {!gameRunning && (
        <WinningMessage
          setClearBoard={setClearBoard}
          setGameRunning={setGameRunning}
        />
      )}
    </>
  );
};
