import { UserContext } from 'client/context';
import React, { useContext } from 'react';
import './session-details.scss';

export const SessionDetails: React.FC = () => {
  const { state, login } = useContext(UserContext);

  return (
    <div className="sessionDiv">
      <span className="sessionSpan">{`Logged in as ${state.user?.username} - The player who is ${state.user?.descript}`}</span>
    </div>
  );
};
