import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'interfaz';
  showHeader = false;
  router: string;


  // tslint:disable-next-line:variable-name
  constructor( public _router: Router) {
    this._router.events.subscribe(() => this.router = this._router.url );
  }


  // tslint:disable-next-line:typedef
  ngOnInit() {}

}
