import { TeamType } from './enums';

export interface IBoardProps {
  currentTeam: TeamType;
  setCurrentTeam: React.Dispatch<React.SetStateAction<TeamType>>;
}
export interface IUser {
  username?: string;
  opponent?: string;
  team?: TeamType;
  record?: IUserRecord;
}

interface IUserRecord {
  wins?: number;
  losses?: number;
  draws?: number;
}

export interface ISessionProps {
  currentTeam: TeamType;
}
