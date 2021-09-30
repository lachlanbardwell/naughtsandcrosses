import React, { ChangeEvent, useState } from 'react';
import '../login/login.scss';
import { loginHelper } from 'client/utils/login';

import logo from 'shared/images/1476.gif';

export const UserLogin: React.FC = () => {
  const [formState, setFormState] = useState({ username: '', descript: '' });
  const [isLoading, setisLoading] = useState<boolean>(false);

  const handleSubmit: () => void = () => {
    setisLoading(true);
    loginHelper(formState.username, formState.descript);
    setTimeout(() => setisLoading(false), 1500);
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
        {isLoading === true ? (
          <img src={logo} />
        ) : (
          <button onClick={handleSubmit}>Login</button>
        )}
      </div>
    </div>
  );
};
