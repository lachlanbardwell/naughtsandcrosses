import { UserContext } from 'client/context';
import React, { useContext } from 'react';
import './session-details.scss';

export const SessionDetails: React.FC = () => {
  const { state, login } = useContext(UserContext);

  return (
    <div>
      <button onClick={() => console.log('shanefat')}>LOG SHANES WEIGHT</button>
      {`Logged in as ${state.isLoggedIn}`}
    </div>
  );
};
