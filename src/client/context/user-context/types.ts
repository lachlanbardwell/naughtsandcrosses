import { IUser } from 'client/types/user-form-state';

export interface IUserContext {
  login: (user: IUser) => void;
  setUserSuccess: (isSuccess?: boolean) => void;
  state: IUserState;
  logout: () => void;
}

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
    };
