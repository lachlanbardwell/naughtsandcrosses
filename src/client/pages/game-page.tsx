import React from 'react';
import { Board } from 'client/components/board/board';
import { ReturnButton } from 'client/components/return-button/return-button';
import { SessionDetails } from 'client/components/session-details/session-details';
import styled from 'styled-components';

export const GamePage: React.FC = () => {
  return (
    <>
      <SessionDetails />
      <Board />
      <ReturnButton />
    </>
  );
};
