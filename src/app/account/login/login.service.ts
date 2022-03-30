import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string = "http://localhost:8080"
  private httpOptions = {
    headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
  };
  constructor(private http: HttpClient) { }

  public login(username: string, password: string): Observable<any>{
    let body = new URLSearchParams();
    body.set("username", username);
    body.set("password", password);

    return this.http.post(this.url + "/login", body, this.httpOptions);
  }
}
