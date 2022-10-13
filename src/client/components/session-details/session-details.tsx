import { UserContext } from 'client/context';
import { ISessionProps } from 'client/types/user-form-state';
import React, { useContext, useEffect } from 'react';
import { ReturnButton } from '../return-button/return-button';
import './session-details.scss';

export const SessionDetails: React.FC<ISessionProps> = (props) => {
  const { state, setUserTeam } = useContext(UserContext);

  useEffect(() => {
    Math.random() <= 0.5 ? setUserTeam(true) : setUserTeam(false);
  }, []);

  const displayTeamName: (userTeam?: number) => string = (userTeam) => {
    return userTeam === 1 ? 'Naughts' : 'Crosses';
  };

  return (
    <span className="sessionSpan">
      <h2 className="sessionUser">{`${state.user?.username} - ${
        state.user?.team === 1 ? 'Naughts' : 'Crosses'
      }`}</h2>
      <h2 className="sessionUser">{`Player 2 - ${
        state.user?.team === 2 ? 'Naughts' : 'Crosses'
      }`}</h2>
      <ReturnButton />
    </span>
  );
};
