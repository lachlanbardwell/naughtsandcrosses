import { TWinningTeam } from 'client/types/win-state';
import { useState, useEffect } from 'react';

export const useWinState: (winningTeam: TWinningTeam) => string = (
  winningTeam: TWinningTeam,
) => {
  const [winState, setWinState] = useState('');

  useEffect(() => {
    setWinState(winningTeam === 'Crosses' ? 'Crosses' : 'Naughts');
  }, [winningTeam]);

  return winState;
};
