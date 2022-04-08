import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = "http://localhost:8080/api/auth"
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

  public register(username: string,email: string, password: string): Observable<any>{
    let body = {
      "username" : username,
      "email" : email,
      "password" : password
    }

    return this.http.post(this.url + "/register", body, this.httpOptions);
  }
}
