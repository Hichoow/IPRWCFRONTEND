import { Component, OnInit } from '@angular/core';
import {TokenService} from "../services/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isLoggedIn = false;

  constructor(private tokenService: TokenService, private router: Router) {
    this.isLoggedIn = this.tokenService.isUserLoggedIn();
  }

  ngOnInit(): void {
  }

  public LoggedIn(){
    if (!this.isLoggedIn){
      this.router.navigateByUrl("/login")
    }
  }

  public LogOut(): void{
    this.tokenService.signOut();
  }


}
