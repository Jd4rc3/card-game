import { Card } from './card.model';

export interface Deck {
  uid: string;
  numberOfCards: number;
  deck: Card[];
}
