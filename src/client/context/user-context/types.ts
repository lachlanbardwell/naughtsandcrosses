import { IUser } from 'client/types/user-form-state';

export interface IUserContext {
  newUser: (user: IUser) => void;
  setUserSuccess: (isSuccess?: boolean) => void;
  state: IUserState;
}

export interface IUserState {
  error: boolean;
  isLoading: boolean;
  isLoggedIn: boolean;
  user?: IUser;
}

export type UserActions =
  | {
      type: 'login' | 'success' | 'failure';
    }
  | {
      field: string;
      value: string;
      type: 'field';
    }
  | {
      user: IUser;
      type: 'newUser';
    };
