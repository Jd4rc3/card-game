import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Player } from '../../../shared/user.model';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private playersCollection: AngularFirestoreCollection<Player>;
  players: Observable<Player[]>;

  constructor(private readonly firestore: AngularFirestore) {
    this.playersCollection = firestore.collection<Player>('players');
    this.players = this.playersCollection.valueChanges();
  }

  printHi() {
    console.log('Hi');
  }
}
