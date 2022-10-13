import { UserContext } from 'client/context';
import { ISessionProps } from 'client/types/user-form-state';
import React, { useContext, useEffect } from 'react';
import { ReturnButton } from '../return-button/return-button';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import ClearIcon from '@material-ui/icons/Clear';
import './session-details.scss';

export const SessionDetails: React.FC<ISessionProps> = (props) => {
  const { state, setUserTeam } = useContext(UserContext);

  useEffect(() => {
    Math.random() <= 0.5 ? setUserTeam(true) : setUserTeam(false);
  }, []);

  return (
    <span className="sessionSpan">
      <h2 className="sessionSecondUser">
        Player 2 Team:&nbsp;
        {state.user?.team === 2 ? (
          <RadioButtonUncheckedIcon style={{ fontSize: 30 }} />
        ) : (
          <ClearIcon style={{ fontSize: 32 }} />
        )}
      </h2>
      <span className="sessionStats">
        <h2 className="sessionUser">
          {state.user?.username} Team:&nbsp;
          {state.user?.team === 1 ? (
            <RadioButtonUncheckedIcon style={{ fontSize: 30 }} />
          ) : (
            <ClearIcon style={{ fontSize: 32 }} />
          )}
        </h2>
        <p>
          Wins: {state.user?.record?.wins} Losses: {state.user?.record?.losses}
          &nbsp;Draws: {state.user?.record?.draws}
        </p>
        <ReturnButton />
      </span>
    </span>
  );
};
