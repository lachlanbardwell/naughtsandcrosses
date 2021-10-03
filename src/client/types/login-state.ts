import { IformState } from './user-form-state';

export interface ILoginState {
  formState: IformState;
  isLoading: boolean;
  isLoggedIn: boolean;
  error: boolean;
}
