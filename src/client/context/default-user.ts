import { ILoginState } from 'client/types/login-state';

export const initialUserState: ILoginState = {
  formState: { username: '', descript: '' },
  isLoading: false,
  isLoggedIn: false,
  error: false,
};
