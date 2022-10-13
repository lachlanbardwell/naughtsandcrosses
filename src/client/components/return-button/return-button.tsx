import { UserContext } from 'client/context';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './return-button.scss';

export const ReturnButton: React.FC = () => {
  const { logout } = useContext(UserContext);
  const history = useHistory();

  return (
    <button
      id="returnButton"
      onClick={() => {
        logout();
        history.push({ pathname: '/' });
      }}
    >
      Logout&nbsp;
      <ExitToAppIcon />
    </button>
  );
};
