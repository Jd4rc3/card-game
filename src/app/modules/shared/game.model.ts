import { Player } from './player.model';

export interface GameModel {
  id: string;
  iniciado: boolean;
  finalizado: boolean;
  uid: string;
  cantidadJugadores: number;
  jugadores: { [key: string]: Player };
  ganador: null;
}
