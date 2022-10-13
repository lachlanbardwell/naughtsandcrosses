import { TeamType } from 'client/types/enums';
import { IUser } from 'client/types/user-form-state';

export interface ICellMap {
  cellClicked?: number;
  teamClicked?: TeamType;
}

//All context for state reducer
export interface IUserContext {
  login: (user: IUser) => void;
  setUserSuccess: (isSuccess?: boolean) => void;
  state: IUserState;
  logout: () => void;
  setUserTeam: (isCrosses?: boolean) => void;
  setUserWin: (result: string) => void;
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
    }
  | {
      type: 'win' | 'lose' | 'draw';
    };

export interface IWinningTeam {
  winningTeam: TeamType;
  setWinningTeam: (team: TeamType) => void;
  setClearBoard: (isClear: boolean) => void;
  setGameRunning: (isRunning: boolean) => void;
}
