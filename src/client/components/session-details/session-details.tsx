import { UserContext } from 'client/context';
import React, { useContext, useEffect } from 'react';
import './session-details.scss';

export const SessionDetails: React.FC = () => {
  const { state, login } = useContext(UserContext);

  // useEffect(() => {
  //   console.log(Math.random() <= 0.5 ? 'Naughts' : 'Crosses');
  //   console.log(state);
  // }, []);

  return (
    <div className="sessionDiv">
      <span className="sessionSpan">{`Logged in as ${state.user?.username} - The player who is ${state.user?.descript}`}</span>
    </div>
  );
};
