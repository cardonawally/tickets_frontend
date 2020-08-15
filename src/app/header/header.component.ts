import { Component, OnInit } from '@angular/core';
import {JwtHelperService} from '../services/jwt-helper.service';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // Variables
  accessToken: any;
  accessTokenDetails: any;
  loading: boolean;
  showHeader = false;


  constructor(
    jwtHelper: JwtHelperService,
    private authService: AuthService,
    private router: Router
  ) {
    this.accessToken = localStorage.getItem('access_token');
    this.accessTokenDetails = {
      id: jwtHelper.id(),
      name: jwtHelper.name(),
      email: jwtHelper.email()
    };
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => this.modifyHeader(event));
    console.log(this.router.events.subscribe(event => this.modifyHeader(event)));
  }

  /**
   * Logout the user and revoke his token
   */
  logout(): void {
    this.loading = true;
    this.authService.logout()
      .subscribe(() => {
        this.loading = false;
        localStorage.removeItem('access_token');
        this.router.navigate(['/login']);
      });
  }

  // tslint:disable-next-line:typedef
  modifyHeader(location) {
    // tslint:disable-next-line:triple-equals
    if (location.url == '/login'){
      this.showHeader = false;
    }else{
      this.showHeader = true;
    }
  }




}
