import { Component, OnInit } from '@angular/core';
import {TokenService} from "../services/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public isLoggedIn = false;

  constructor(private tokenService: TokenService, private router: Router) {
    this.isLoggedIn = this.tokenService.isUserLoggedIn();
  }

  ngOnInit(): void {
  }



}
