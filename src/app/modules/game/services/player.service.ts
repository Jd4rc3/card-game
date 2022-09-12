import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  CollectionReference,
  doc,
  Firestore,
  query,
  setDoc,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Player } from '../../shared/player.model';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  playersReference: CollectionReference = collection(this.firestore, 'players');

  constructor(private readonly firestore: Firestore) {}

  getPlayers() {
    const qry = query(this.playersReference, where('available', '==', true));

    return collectionData(qry, { idField: 'uid' }) as Observable<Player[]>;
  }

  async toggleStatus(loggedPlayer: Player) {
    const currentPlayer = doc(this.firestore, 'players', loggedPlayer.uid);

    return updateDoc(currentPlayer, { available: !loggedPlayer.available });
  }

  async addPlayer(player: Player) {
    const playerRef = doc(this.playersReference, player.uid);
    return setDoc(playerRef, player);
  }
}
