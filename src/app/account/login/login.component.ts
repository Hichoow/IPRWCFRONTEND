import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  public login(username: string, password: string): void{
    let observer: Observable<string> = this.loginService.login(username, password);
    observer
      .subscribe(token => {
        if(token != "") {

          console.log(token)
          console.log("GELUKT")
        } else {
          console.log("NIET GELUKT")
        }
      });

  }
}
