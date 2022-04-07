import { Component, OnInit } from '@angular/core';
import {TokenService} from "../services/token.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isLoggedIn = false;

  constructor(private tokenService: TokenService) {
    this.isLoggedIn = this.tokenService.isUserLoggedIn();
  }

  ngOnInit(): void {
  }

  public LogOut(): void{
    this.tokenService.signOut();
  }


}
