import { UserContext } from 'client/context';
import { IUser } from 'client/types/user-form-state';
import { loginHelper } from 'client/utils/login';
import React, { ChangeEvent, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import logo from 'shared/images/1476.gif';
import '../login/login.scss';

export const UserLogin: React.FC = () => {
  const { newUser, setUserSuccess, state } = useContext(UserContext);
  const [formState, setFormState] = useState<IUser>({
    descript: '',
    username: '',
  });

  const handleSubmit: () => void = () => {
    console.log(state);
    let validate = loginHelper(formState.username, formState.descript);
    if (validate !== 'logging in') {
      setUserSuccess(false);
      return;
    }

    setTimeout(() => setUserSuccess(true), 2000);
    setTimeout(() => console.log(formState), 3000);
    newUser(formState);
  };

  const handleChange = (field: keyof typeof formState) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      setFormState((prev) => ({ ...prev, [field]: event.target.value }));
    };
  };

  return (
    <div className="loginContainer">
      <h2 className="formHeading">Enter your details</h2>
      <div className="loginForm">
        <input
          className="userInput"
          type="text"
          placeholder="Username"
          value={formState.username}
          onChange={handleChange('username')}
        />
        <input
          className="descriptInput"
          type="text"
          placeholder="Description"
          value={formState.descript}
          onChange={handleChange('descript')}
        />
        <div className="loginDiv">
          {state.isLoading ? (
            <img src={logo} />
          ) : (
            <button onClick={handleSubmit}>Login</button>
          )}
          {state.isLoggedIn ? <Redirect push to="/game"></Redirect> : null}
          {state.error && <h3>One or more required fields missing</h3>}
        </div>
      </div>
    </div>
  );
};
