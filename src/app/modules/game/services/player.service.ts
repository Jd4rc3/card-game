import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  CollectionReference,
  doc,
  Firestore,
  getDocs,
  query,
  setDoc,
  where,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Player } from '../../../shared/user.model';
import { User } from '@angular/fire/auth';

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
    const q = query(this.playersRefference, where('online', '==', true));

    getDocs(q).then((querySnapshot) => {
      console.log(querySnapshot);
    });
  }

  async addPlayer(player: Player) {
    const playerRef = doc(this.playersRefference, player.uid);
    return setDoc(playerRef, player);
  }
}
