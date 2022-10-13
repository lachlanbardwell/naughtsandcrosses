import { UserContext } from 'client/context';
import { TeamType } from 'client/types/enums';
import { IUser } from 'client/types/user-form-state';
import { loginHelper } from 'client/utils/login';
import React, { ChangeEvent, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { TextField, Tooltip } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import logo from 'shared/images/1476.gif';
import '../login/login.scss';

export const UserLogin: React.FC = () => {
  const { login, setUserSuccess, state } = useContext(UserContext);
  const [formState, setFormState] = useState<IUser>({
    descript: '',
    username: '',
    team: TeamType.DEFAULT,
    record: { wins: 0, losses: 0, draws: 0 },
  });

  const handleSubmit: React.FormEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    let validate = loginHelper(formState.username!, formState.descript!);
    if (validate !== 'logging in') {
      setUserSuccess(false);
      return;
    }

    login(formState);
    setTimeout(() => {
      setUserSuccess(true);
    }, 2000);
  };

  const handleChange = (field: keyof typeof formState) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      setFormState((prev) => ({ ...prev, [field]: event.target.value }));
    };
  };

  return (
    <div className="loginContainer">
      <h3 className="formHeading">Log In</h3>
      <div className="formContainer">
        <form className="loginForm">
          <TextField
            className="userInput"
            type="text"
            placeholder="Username"
            value={formState.username}
            onChange={handleChange('username')}
            variant="outlined"
          />
          <TextField
            className="descriptInput"
            type="text"
            placeholder="Description"
            value={formState.descript}
            onChange={handleChange('descript')}
            variant="outlined"
          />
        </form>
        <div className="loginDiv">
          {state.isLoading ? (
            <img src={logo} className="loadImage" />
          ) : (
            <span className="infoSpan">
              <input
                id="inputLogin"
                type="submit"
                value="Login"
                onClick={(e) => handleSubmit(e)}
              />
              <Tooltip title="Stats will be retained on refresh">
                <HelpOutlineIcon />
              </Tooltip>
            </span>
          )}
          {state.isLoggedIn && <Redirect push to="/game"></Redirect>}
          {state.error && (
            <Alert className="loginError" severity="error">
              One or more required fields missing
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};
