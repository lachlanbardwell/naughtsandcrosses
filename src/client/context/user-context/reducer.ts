import { IUserState, UserActions } from './types';

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
        error: false,
        isLoading: false,
        isLoggedIn: true,
      };
    }

    case 'failure': {
      return {
        ...state,
        error: true,
        isLoading: false,
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

    case 'Crosses': {
      return {
        ...state,
        user: { ...state.user, team: 'Crosses' },
      };
    }

    case 'Naughts': {
      return {
        ...state,
        user: { ...state.user, team: 'Naughts' },
      };
    }

    default:
      break;
  }

  return state;
};
