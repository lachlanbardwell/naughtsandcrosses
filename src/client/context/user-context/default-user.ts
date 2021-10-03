import { IUserState } from './types';

export const initialUserState: IUserState = {
  user: { username: '', descript: '' },
  isLoading: false,
  isLoggedIn: false,
  error: false,
};
