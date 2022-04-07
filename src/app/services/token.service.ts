import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() { }

  signOut(): void {
    window.localStorage.clear();
    window.location.assign("");
  }

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public isUserLoggedIn(): boolean {
    let user = localStorage.getItem(TOKEN_KEY);
    if (user === null) return false;
    return true;
  }

  public hasUserRole(){
    let user = this.getUser();
    return user.roles.get("ROLE_USER");
  }
}
