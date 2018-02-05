import {Injectable} from '@angular/core';
import {localStorageVariables} from '../constants/localStorage';

@Injectable()
export class AuthService {

  public username: string;

  public isLoggedIn(): boolean {
    if (this.username) {
      return true;
    }
    this.username = this.getUsername();
    return !!this.username;
  }

  public getUsername(): string {
    return localStorage.getItem(localStorageVariables.username);
  }

  public setUsername(newUsername: string): void {
    this.username = newUsername;
    localStorage.setItem(localStorageVariables.username, newUsername);
  }

  public deleteUsername(): void {
    this.username = null;
    localStorage.removeItem(localStorageVariables.username);
  }
}
