import { IUser } from 'client/types/user-form-state';
import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { UserContext } from './context';
import { initialUserState } from './default-user';
import { userReducer } from './reducer';

export const UserProvider: React.FC = (props) => {
  //Check if data exists in sessionStorage before setting intial state
  const [state, dispatch] = useReducer(userReducer, initialUserState);

  useEffect(() => {
    sessionStorage.setItem('User State', JSON.stringify(state.user));
  }, [state]);

  const logout = useCallback(() => {
    dispatch({ type: 'logout' });
  }, []);

  // Adds user data
  const login = useCallback((user: IUser) => {
    dispatch({ type: 'login', user });
  }, []);

  // Updates the success/failure state
  const setUserSuccess = useCallback((isSuccess?: boolean) => {
    dispatch({
      type: isSuccess ? 'success' : 'failure',
    });
  }, []);

  const setUserTeam = useCallback((isCrosses?: boolean) => {
    dispatch({
      type: isCrosses ? 'Crosses' : 'Naughts',
    });
  }, []);

  const setUserWin = useCallback((isWinner?: boolean) => {
    dispatch({
      type: isWinner ? 'win' : isWinner == false ? 'lose' : 'draw',
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        logout,
        login,
        setUserSuccess,
        setUserTeam,
        setUserWin,
        state,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
