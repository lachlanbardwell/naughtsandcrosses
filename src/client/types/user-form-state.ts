import { TeamType } from './enums';

export interface IUser {
  username?: string;
  descript?: string;
  team?: TeamType;
  winner?: boolean;
}
