import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = environment.baseUrl + "api/auth"
  private httpOptions = {
    headers: new HttpHeaders().set("Content-Type", "application/json")
  };

  constructor(private http: HttpClient) { }

  public login(username: string, password: string): Observable<any>{
    let body = {
      "username" : username,
      "password" : password
    }

    return this.http.post(this.url + "/login", body, this.httpOptions);
  }

  public register(username: string, email: string, password: string): Observable<any>{
    let body = {
      "username" : username,
      "email" : email,
      "password" : password
    }

    return this.http.post(this.url + "/register", body, this.httpOptions);
  }
}
