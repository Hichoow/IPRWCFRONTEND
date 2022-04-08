import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  successfullyRegister: boolean = false;
  unsuccessfullyRegister: boolean = false;
  errorMsg: string = '';
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  public register(username: string, password: string, email: string): void{
    let observer: Observable<string> = this.userService.register(username, email, password);
    observer
      .subscribe(token => {
        if(token != "") {
          this.successfullyRegister = true;
          this.unsuccessfullyRegister = false;
        }
      },
        (error) => {
          this.unsuccessfullyRegister = true;
          this.errorMsg = error.error.message;
        });

  }

}
