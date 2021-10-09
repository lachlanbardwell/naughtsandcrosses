import { TeamType } from 'client/types/enums';
import { IUserState } from './types';

export const initialUserState: IUserState = {
  user: {
    username: '',
    descript: '',
    team: TeamType.DEFAULT,
    winner: undefined,
  },
  isLoading: false,
  isLoggedIn: false,
  error: false,
};
