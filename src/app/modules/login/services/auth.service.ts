import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly auth: Auth) {}

  /* signInWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }*/

  /*signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }*/

  signOut() {
    return signOut(this.auth);
  }
}
