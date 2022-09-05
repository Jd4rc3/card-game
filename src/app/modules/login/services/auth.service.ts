import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from '@angular/fire/auth';
import { PlayerService } from '../../game/services/player.service';
import { Router } from '@angular/router';
import { Player } from '../../shared/player.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
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

      this.playerService.addPlayer(newPlayer);

      this.router.navigate(['/game']);
    });
  }

  signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  signOut() {
    return signOut(this.auth).then(() => {
      // this.playerService.toggleStatus();
      this.router.navigate(['/']);
    });
  }
}
