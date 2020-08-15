import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Variables
  authUrl = 'http://tickets.test/oauth/token';
  apiUrl = 'http://tickets.test/api';
  options: any;

  /**
   * Constructor
   * @param http The http client object
   */
  constructor(
    private http: HttpClient
  ) {
    this.options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      })
    };
  }
  /**
   * Get an access token
   * @param e The email address
   * @param p The password string
   */
  // tslint:disable-next-line:typedef
  login(e: string, p: string) {
    return this.http.post(this.authUrl, {
      grant_type: 'password',
      client_id: '2',
      client_secret: 'gfgGvDCJZkfwPSBfO7rEdVtDDPvi1IuArlyi6Oyv',
      username: e,
      password: p,
      scope: ''
    }, this.options);
  }


  /**
   * Revoke the authenticated user token
   */
  // tslint:disable-next-line:typedef
  logout() {
    const options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('access_token')
      })
    };
    return this.http.get(this.apiUrl + '/token/revoke', options);
  }


  // tslint:disable-next-line:typedef
  getToken() {
    return localStorage.getItem('access_token');
  }
}
