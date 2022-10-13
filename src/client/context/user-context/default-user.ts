import { TeamType } from 'client/types/enums';
import { IUserState } from './types';

export const initialUserState: IUserState = {
  //Check if data exists in sessionStorage before setting intial state
  user: sessionStorage.getItem('User State')
    ? JSON.parse(sessionStorage.getItem('User State') as string)
    : {
        username: '',
        opponent: '',
        team: TeamType.DEFAULT,
      },
  isLoading: false,
  isLoggedIn: false,
  error: false,
};
