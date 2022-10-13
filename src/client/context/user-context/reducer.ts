import { IUserState, UserActions } from './types';
import { TeamType } from 'client/types/enums';

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
        user: { ...state.user, team: TeamType.CROSS },
      };
    }

    case 'Naughts': {
      return {
        ...state,
        user: { ...state.user, team: TeamType.NAUGHT },
      };
    }
    case 'win': {
      return {
        ...state,
        user: {
          ...state.user,
          record: {
            ...state.user?.record,
            // @ts-ignore
            wins: state.user?.record?.wins + 1,
          },
        },
      };
    }
    case 'lose': {
      return {
        ...state,
        user: {
          ...state.user,
          record: {
            ...state.user?.record,
            // @ts-ignore
            losses: state.user?.record?.losses + 1,
          },
        },
      };
    }
    case 'draw': {
      return {
        ...state,
        user: {
          ...state.user,
          record: {
            ...state.user?.record,
            // @ts-ignore
            draws: state.user?.record?.draws + 1,
          },
        },
      };
    }

    default:
      break;
  }

  return state;
};
