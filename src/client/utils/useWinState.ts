import { TeamType } from 'client/types/enums';
import { useState, useEffect } from 'react';

export const useWinState: (winningTeam: TeamType) => TeamType = (
  winningTeam: TeamType,
) => {
  const [winState, setWinState] = useState(TeamType.DEFAULT);

  useEffect(() => {
    setWinState(
      winningTeam === TeamType.CROSS ? TeamType.CROSS : TeamType.NAUGHT,
    );
  }, [winningTeam]);

  return winState;
};
