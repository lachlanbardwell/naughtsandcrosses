import { IUserState } from './types';

export const initialUserState: IUserState = {
  user: { username: '', descript: '', team: '', winner: undefined },
  isLoading: false,
  isLoggedIn: false,
  error: false,
};
