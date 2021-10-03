import { IUser } from 'client/types/user-form-state';
import React, { useCallback, useReducer } from 'react';
import { UserContext } from './context';
import { initialUserState } from './default-user';
import { userReducer } from './reducer';

export const UserProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(userReducer, initialUserState);

  const logout = useCallback(() => {
    dispatch({ type: 'logout' });
  }, []);

  // Adds user data to store
  const login = useCallback((user: IUser) => {
    console.log('called', user);
    dispatch({ type: 'login', user });
  }, []);

  // Updates the success/failure state in store
  const setUserSuccess = useCallback((isSuccess?: boolean) => {
    dispatch({
      type: isSuccess ? 'success' : 'failure',
    });
  }, []);

  return (
    <UserContext.Provider value={{ logout, login, setUserSuccess, state }}>
      {props.children}
    </UserContext.Provider>
  );
};
