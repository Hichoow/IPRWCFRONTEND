import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {UserService} from "../user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  public register(username: string, password: string, email: string): void{
    let observer: Observable<string> = this.userService.register(username, password, email);
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
