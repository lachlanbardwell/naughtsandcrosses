import { ReturnButton } from 'client/components/return-button/return-button';
import { SessionDetails } from 'client/components/session-details/session-details';
import { WinningMessage } from 'client/components/winning-message/winning-message';
import React from 'react';
import { Board } from '../components/board/board';

export const GamePage: React.FC = () => {
  return (
    <>
      <SessionDetails />
      <Board />
      <ReturnButton />
    </>
  );
};
