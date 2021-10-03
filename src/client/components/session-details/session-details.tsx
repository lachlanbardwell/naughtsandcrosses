import { UserContext } from 'client/context';
import React, { useContext } from 'react';
import './session-details.scss';

export const SessionDetails: React.FC = () => {
  const { state, newUser } = useContext(UserContext);

  return (
    <div>
      <button onClick={() => console.log(newUser)}>LOG</button>
      {`Logged in as ${state.isLoggedIn}`}
    </div>
  );
};
