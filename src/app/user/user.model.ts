export class User {
  private static _emptyUser = new User("", "", "", "");

  constructor(private _username: string,
              private _email: string,
              private _role: string,
              private _token: string) {
  }


  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }


  static get emptyUser(): User {
    return this._emptyUser;
  }

  static set emptyUser(value: User) {
    this._emptyUser = value;
  }
}
