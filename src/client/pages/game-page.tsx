import React, { useState } from 'react';
import { Board } from 'client/components/board/board';
import { SessionDetails } from 'client/components/session-details/session-details';
import { TeamType } from 'client/types/enums';

export const GamePage: React.FC = () => {
  const [currentTeam, setCurrentTeam] = useState<TeamType>(() =>
    Math.random() > 0.5 ? TeamType.CROSS : TeamType.NAUGHT,
  );
  return (
    <>
      <SessionDetails currentTeam={currentTeam} />
      <Board currentTeam={currentTeam} setCurrentTeam={setCurrentTeam} />
    </>
  );
};
