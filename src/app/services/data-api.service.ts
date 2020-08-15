import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  data: User[];
  apiUrl = 'http://tickets.test/api';
  options: any;

  constructor(private httpClient: HttpClient) {
    this.options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      })
    };
  }

  // tslint:disable-next-line:typedef
  guardar_ticket(id: number, subject: string, detail: string, file: string){
    return this.httpClient.post(this.apiUrl + '/tickets/guardar_ticket', {
      id_user: id,
      detalle: detail,
      asunto: subject,
      archivo: file,
      scope: ''
    }, this.options);
  }

  
  getTickets(page: number = 1): Observable<any> {
    return this.httpClient.get(this.apiUrl + '/tickets/?page=' + page);
  }


  // tslint:disable-next-line:typedef
  getTicket(id){
    return this.httpClient.get(this.apiUrl + '/tickets/' + id);
  }


  // tslint:disable-next-line:typedef variable-name
  registrar_usuario(name: string, email: string, password: string, password_confirmation: string){
    return this.httpClient.post('http://tickets.test/register', {

      name, email, password, password_confirmation
    }, this.options);
  }
}

