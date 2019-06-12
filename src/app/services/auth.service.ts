import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import {auth} from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth) { 
    this.user$ = afAuth.authState
  }

 login(){
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }
  logout(){
    this.afAuth.auth.signOut();
  }
}
