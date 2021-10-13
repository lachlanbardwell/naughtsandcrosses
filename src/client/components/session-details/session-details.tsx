import { UserContext } from 'client/context';
import React, { useContext, useEffect } from 'react';
import './session-details.scss';

export const SessionDetails: React.FC = () => {
  const { state, setUserTeam } = useContext(UserContext);

  useEffect(() => {
    Math.random() <= 0.5 ? setUserTeam(true) : setUserTeam(false);
    console.log(state);
  }, []);

  const displayTeamName: (userTeam?: number) => string = (userTeam) => {
    if (userTeam === 1) return 'Naughts';
    return 'Crosses';
  };

  return (
    <div className="sessionDiv">
      <h2 className="sessionUser">{`Logged in as ${state.user?.username} - The player who is ${state.user?.descript}`}</h2>
      <br />
      {state.user && (
        <h2 className="sessionTeam">{`${displayTeamName(
          state.user?.team,
        )} Turn`}</h2>
      )}
    </div>
  );
};
