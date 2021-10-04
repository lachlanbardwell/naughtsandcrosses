import { IUserState } from './types';

export const initialUserState: IUserState = {
  user: { username: '', descript: '', team: '' },
  isLoading: false,
  isLoggedIn: false,
  error: false,
};
