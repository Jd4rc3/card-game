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
  ) {
    this.onAuthStateChanged((user) => {
      if (user != null) {
        this.user = this.instancePlayer(user);
      }
    });
  }

  signInWithGoogle() {
    signInWithPopup(this.auth, new GoogleAuthProvider()).then((loggedUser) => {
      const newPlayer = this.instancePlayer(loggedUser.user);

      this.playerService
        .addPlayer(newPlayer)
        .then(() => (this.user = newPlayer))
        .then(() => this.router.navigate(['/game']));
    });
  }

  onAuthStateChanged(func: (user: User | null) => void) {
    return this.auth.onAuthStateChanged(func);
  }

  signOut() {
    return signOut(this.auth).then(() => {
      this.playerService.toggleStatus(this.getLoggedUser()).then(() => {
        this.user = null;
        this.router.navigate(['/']);
      });
    });
  }

  getLoggedUser() {
    if (this.user != null) {
      return this.user;
    }

    alert('You are not logged in');
    this.router.navigate(['/']);
    return {} as Player;
  }

  instancePlayer(loggedUser: User | null): Player {
    if (loggedUser != null) {
      const { photoURL, uid, email, displayName } = loggedUser;

      return {
        uid,
        email,
        photoURL,
        displayName,
        available: true,
      };
    }

    alert('You are not logged in');
    this.router.navigate(['/']);
    return {} as Player;
  }
}
