import { Card } from './card.model';
import { Round } from './round.model';

export interface Board {
  boardId: string;
  round: Round;
  players: string[];
  cards: Card | {};
}
