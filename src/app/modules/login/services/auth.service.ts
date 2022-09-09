import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from '@angular/fire/auth';
import { PlayerService } from '../../game/services/player.service';
import { Router } from '@angular/router';
import { Player } from '../../shared/player.model';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user!: Player | null;

  constructor(
    private readonly auth: Auth,
    private playerService: PlayerService,
    private router: Router
  ) {}

  signInWithGoogle() {
    signInWithPopup(this.auth, new GoogleAuthProvider()).then((loggedUser) => {
      const { uid, email, photoURL, displayName } = loggedUser.user;

      const newPlayer: Player = {
        uid,
        email,
        photoURL,
        displayName,
        online: true,
      };

      this.playerService
        .addPlayer(newPlayer)
        .then(() => (this.user = newPlayer));

      this.router.navigate(['/game']);
    });
  }

  onAuthStateChanged(func: (user: User | null) => void) {
    return this.auth.onAuthStateChanged(func);
  }

  signOut() {
    return signOut(this.auth).then(() => {
      // this.playerService.toggleStatus();
      this.user = null;
      this.router.navigate(['/']);
    });
  }
}
