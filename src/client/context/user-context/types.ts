import { IUser } from 'client/types/user-form-state';

//All context for state reducer
export interface IUserContext {
  login: (user: IUser) => void;
  setUserSuccess: (isSuccess?: boolean) => void;
  state: IUserState;
  logout: () => void;
  setUserTeam: (isCrosses?: boolean) => void;
}

//Structure of state
export interface IUserState {
  error: boolean;
  isLoading: boolean;
  isLoggedIn: boolean;
  user?: IUser;
}

export type UserActions =
  | {
      type: 'success' | 'failure' | 'logout';
    }
  | {
      user: IUser;
      type: 'login';
    }
  | {
      type: 'Naughts' | 'Crosses';
    };
