import { UserContext } from 'client/context';
import { TeamType } from 'client/types/enums';
import { IUser } from 'client/types/user-form-state';
import { loginHelper } from 'client/utils/login';
import React, { ChangeEvent, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import logo from 'shared/images/1476.gif';
import '../login/login.scss';

export const UserLogin: React.FC = () => {
  const { login, setUserSuccess, state } = useContext(UserContext);
  const [formState, setFormState] = useState<IUser>({
    descript: '',
    username: '',
    team: TeamType.DEFAULT,
  });

  const handleSubmit: React.ChangeEventHandler<HTMLFormElement> = (event) => {
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
      <h2 className="formHeading">Enter your details</h2>
      <form className="loginForm" onSubmit={handleSubmit}>
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
            <input id="inputLogin" type="submit" value="Login"></input>
          )}
          {state.isLoggedIn ? <Redirect push to="/game"></Redirect> : null}
          {state.error && <h3>One or more required fields missing</h3>}
        </div>
      </form>
      <button onClick={() => console.log(state)}>STATE</button>
    </div>
  );
};
