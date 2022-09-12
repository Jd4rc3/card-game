import { Players } from './players.mode';

export interface GameModel {
  id: string;
  started: boolean;
  finished: boolean;
  uid: string;
  numberOfPlayers: number;
  players: Players;
  winner: null;
}
