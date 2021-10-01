import React, { ChangeEvent, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { loginHelper } from 'client/utils/login';
import '../login/login.scss';
import logo from 'shared/images/1476.gif';
interface IformState {
  username: string;
  descript: string;
}

export const UserLogin: React.FC = () => {
  const [formState, setFormState] = useState<IformState>({
    username: '',
    descript: '',
  });
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [redirect, setRedirect] = useState<boolean>(false);

  const handleSubmit: () => void = () => {
    let validate = loginHelper(formState.username, formState.descript);
    validate === 'logging in'
      ? (setisLoading(true),
        setTimeout(() => setRedirect(true), 2000),
        console.log('logging in...'))
      : null;
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
          {isLoading ? (
            <img src={logo} />
          ) : (
            <button onClick={handleSubmit}>Login</button>
          )}
          {redirect ? <Redirect to="/game"></Redirect> : null}
        </div>
      </div>
    </div>
  );
};
