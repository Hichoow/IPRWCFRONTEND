import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {UserService} from "../../services/user.service";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoggedIn = false;
  LoggedInFail = false;
  errorMsg = '';
  roles: string[] = [];
  constructor(private userService: UserService, private tokenService: TokenService) {

  }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.roles = this.tokenService.getUser().roles;
      this.LoggedIn = true;
    }
  }

  public login(username: string, password: string): void{
    this.userService.login(username, password).subscribe(
      data => {
        this.tokenService.saveToken(data.token);
        this.tokenService.saveUser(data);
        this.LoggedIn = true;
        this.LoggedInFail = false;
        this.roles = this.tokenService.getUser().roles;
        this.reload();
      },
      error => {

        console.log("NIET GELUKT")
        this.errorMsg = error.error.message;
        this.LoggedInFail = true;
      }
    );

  }

  reload(): void {
    window.location.reload();
  }
}
