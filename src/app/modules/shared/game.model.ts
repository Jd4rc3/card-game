import { Player } from './player.model';

export interface GameModel {
  _id: string;
  fecha: string;
  uid: string;
  iniciado: boolean;
  finalizado: boolean;
  cantidadJugadores: number;
  jugadores: { [key: string]: {} };
}
