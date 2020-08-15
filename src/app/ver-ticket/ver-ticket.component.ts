import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataApiService} from '../services/data-api.service';

@Component({
  selector: 'app-ver-ticket',
  templateUrl: './ver-ticket.component.html',
  styleUrls: ['./ver-ticket.component.css']
})
export class VerTicketComponent implements OnInit {

  id: any;
  data: any;

  constructor(private route: ActivatedRoute, private apiService: DataApiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    // tslint:disable-next-line:no-unused-expression
    this.getData;
  }

  // tslint:disable-next-line:typedef
  getData(){
    this.apiService.getTicket(this.id).subscribe(res => {
      this.data = res;
      }, (err: any) => {
        console.log(err);
      });
  }
}
