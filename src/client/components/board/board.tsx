import React, { useContext, useState, useEffect, useCallback } from 'react';
import { UserContext } from 'client/context';
import { WinningMessage } from '../winning-message/winning-message';
import { BoardContainer, CellContainer } from './board.styles';
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
  //Initial setting of user team randomly to naughts or crosses
  useCallback(
    () => (Math.random() > 0.5 ? setUserTeam(true) : setUserTeam(false)),
    [],
  );
  const { state, setUserTeam } = useContext(UserContext);

  //Initial state map of cells to create empty board
  const [cellState, setCellState] = useState(() =>
    Array.from(Array(9).keys()).map(() => TeamType.DEFAULT),
  );
  //Reference for position of each cell from the map
  const [cellIndex, setCellIndex] = useState<number>(-1);

  //State for clearing board on reset
  const [clearBoard, setClearBoard] = useState(false);
  const [winningTeam, setWinningTeam] = useState<TeamType>(TeamType.DEFAULT);
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
    setWinningTeam(cellState[match[0]]);
  }, [cellState]);

  useEffect(() => {
    //Draw condition
    if (winningTeam) {
      return;
    }
    setTimeout(() => {
      if (cellState.every((cells: TeamType) => cells !== TeamType.DEFAULT)) {
        setGameRunning(false);
      }
    }, 100);
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
    if (winningTeam == TeamType.CROSS || winningTeam == TeamType.NAUGHT)
      setGameRunning(false);
  }, [winningTeam]);

  const onCellHover = useCallback((nextIndex: number) => {
    setCellIndex(nextIndex);
  }, []);

  const onCellClick = useCallback((nextIndex: number, type?: TeamType) => {
    type &&
      setCellState((prev) =>
        prev.map((cell, index) => (index === nextIndex ? type : cell)),
      );
    //Change state on each click
    setUserTeam(type === TeamType.CROSS ? false : true);
    setClearBoard(false);
  }, []);

  return (
    <BoardContainer>
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
      {!gameRunning && (
        <WinningMessage
          winningTeam={winningTeam}
          setWinningTeam={setWinningTeam}
          setClearBoard={setClearBoard}
          setGameRunning={setGameRunning}
        />
      )}
    </BoardContainer>
  );
};
