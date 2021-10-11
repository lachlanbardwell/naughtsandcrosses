import React, { useContext, useState, useEffect, useCallback } from 'react';
import { UserContext } from 'client/context';
import { WinningMessage } from '../winning-message/winning-message';
import '../board/board.scss';
import { CellContainer } from './board.styles';
import { Cell } from './cell';
import { TeamType } from 'client/types/enums';

//Array of possible win conditions based on cell index #
const gridLookup = Object.freeze([
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]);

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

  const [gameRunning, setGameRunning] = useState<boolean>(true);

  useEffect(() => {
    const match = gridLookup.find(([cell1, cell2, cell3]) => {
      const cellValue = cellState[cell1];
      //Checks the first cell has been clicked and matches the win grid, then checks next 2 cells in order
      return (
        cellValue !== TeamType.DEFAULT &&
        cellState[cell2] === cellValue &&
        cellState[cell3] === cellValue
      );
    });
    if (!match) {
      return;
    }
    const winningTeam = cellState[match[0]];
    winningTeam === state.user?.team ? setUserWin(true) : setUserWin(false);
    //Draw condition
    if (cellState.every((cells: TeamType) => cells !== TeamType.DEFAULT)) {
      setUserWin(undefined);
      setGameRunning(false);
    }
  }, [cellState]);

  useEffect(() => {
    //Reset board tiles only when child updates clearboard
    clearBoard &&
      setCellState(() =>
        Array.from(Array(9).keys()).map(() => TeamType.DEFAULT),
      );
  }, [gameRunning]);

  useEffect(() => {
    //Ends game and displays result
    state.user?.winner && setGameRunning(false);
  }, [state.user?.winner]);

  const onCellHover = useCallback((nextIndex: number) => {
    setCellIndex(nextIndex);
  }, []);

  const onCellClick = (nextIndex: number, type?: TeamType) => {
    type &&
      setCellState((prev) =>
        prev.map((cell, index) => (index === nextIndex ? type : cell)),
      );
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
