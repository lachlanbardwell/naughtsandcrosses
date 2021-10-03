import { IUser } from 'client/types/user-form-state';
import { IUserState, UserActions } from './types';

// TODO: Type
export const userReducer = (
  state: IUserState,
  action: UserActions,
): IUserState => {
  switch (action.type) {
    case 'logout': {
      return {
        ...state,
        isLoggedIn: false,
        user: undefined,
      };
    }

    case 'success': {
      return {
        ...state,
        isLoading: false,
        error: false,
        isLoggedIn: true,
      };
    }

    case 'failure': {
      return {
        ...state,
        isLoading: false,
        error: true,
        isLoggedIn: false,
      };
    }
    case 'login': {
      return {
        error: false,
        isLoading: true,
        isLoggedIn: false,
        user: { ...state.user, ...action.user },
      };
    }

    default:
      break;
  }

  return state;
};
