import React, { ChangeEvent, useState, useReducer } from 'react';
import { Redirect } from 'react-router-dom';
import { loginHelper } from 'client/utils/login';
import { reducer as loginReducer } from 'client/context/reducer';
import '../login/login.scss';
import logo from 'shared/images/1476.gif';
import { initialUserState } from 'client/context/default-user';

export const UserLogin: React.FC = () => {
  const [state, dispatch] = useReducer(loginReducer, initialUserState);
  const { formState, isLoading, isLoggedIn } = state;

  const handleSubmit: () => void = () => {
    console.log(state);
    let validate = loginHelper(formState.username, formState.descript);
    validate === 'logging in'
      ? (dispatch({ type: 'login' }),
        setTimeout(() => dispatch({ type: 'success' }), 2000))
      : dispatch({ type: 'failure' });
  };

  const handleChange = (field: keyof typeof formState) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: 'field',
        field: field,
        value: event.target.value,
      });
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
          {isLoggedIn ? <Redirect to="/game"></Redirect> : null}
          {state.error && <h3>One or more required fields missing</h3>}
        </div>
      </div>
    </div>
  );
};
