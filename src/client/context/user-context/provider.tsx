import { IUser } from 'client/types/user-form-state';
import React, { useCallback, useEffect, useReducer } from 'react';
import { UserContext } from './context';
import { initialUserState } from './default-user';
import { userReducer } from './reducer';

export const UserProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(userReducer, initialUserState);
  //Set session storage to retain user object state
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

  const setUserWin = useCallback((result: string) => {
    dispatch({
      type: result === 'win' ? 'win' : result === 'loss' ? 'lose' : 'draw',
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
