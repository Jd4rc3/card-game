import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  CollectionReference,
  doc,
  Firestore,
  query,
  setDoc,
  where,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Player } from '../../shared/player.model';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  playersRefference: CollectionReference = collection(
    this.firestore,
    'players'
  );

  constructor(private readonly firestore: Firestore) {}

  getPlayers() {
    return collectionData(this.playersRefference, {
      idField: 'uid',
    }) as Observable<Player[]>;
  }

  async toggleStatus() {
    const qry = query(this.playersRefference, where('online', '==', true));

    return collectionData(qry, { idField: 'uid' }) as Observable<Player[]>;
  }

  async addPlayer(player: Player) {
    const playerRef = doc(this.playersRefference, player.uid);
    return setDoc(playerRef, player);
  }
}
