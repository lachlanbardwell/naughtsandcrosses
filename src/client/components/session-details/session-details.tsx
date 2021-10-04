import { UserContext } from 'client/context';
import React, { useContext, useEffect } from 'react';
import './session-details.scss';

export const SessionDetails: React.FC = () => {
  const { state, setUserTeam } = useContext(UserContext);

  useEffect(() => {
    Math.random() <= 0.5 ? setUserTeam(true) : setUserTeam(false);
    console.log(state);
  }, []);

  return (
    <div className="sessionDiv">
      <span className="sessionSpanUser">{`Logged in as ${state.user?.username} - The player who is ${state.user?.descript}`}</span>
      <br />
      <span className="sessionSpanTeam">{`Playing as ${state.user?.team}`}</span>
    </div>
  );
};
