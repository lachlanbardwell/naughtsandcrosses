import React from 'react';
import { initialUserState } from './default-user';
import { IUserContext } from './types';

export const UserContext = React.createContext<IUserContext>({
  login: () => null,
  setUserSuccess: () => null,
  state: initialUserState,
  logout: () => null,
});
