import { IUser } from 'client/types/user-form-state';
import { IUserState, UserActions } from './types';

// TODO: Type
export const userReducer = (
  state: IUserState,
  action: UserActions,
): IUserState => {
  switch (action.type) {
    case 'field': {
      return {
        ...state,
        user: {
          ...(state.user as IUser),
          [action.field]: action.value,
        },
      };
    }

    case 'login': {
      return {
        ...state,
        isLoading: true,
        error: false,
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
    case 'newUser': {
      return {
        error: false,
        isLoading: false,
        isLoggedIn: true,
        user: { ...state.user, ...action.user },
      };
    }

    default:
      break;
  }

  return state;
};