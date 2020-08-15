import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DataApiService } from '../services/data-api.service';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  // variables
  data = [];
  page = 1;
  total = 0;
  perPage = 10;

  constructor(private route: ActivatedRoute, private router: Router, private apiService: DataApiService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.page = parseInt(params.page, 10) || 1;
      this.getData(this.page);
      window.scrollTo(0, 0);
    });
  }

  // tslint:disable-next-line:typedef
  getData(page: number = 1) {
    this.apiService.getTickets(page).subscribe(response => {
      this.data = response.data.table;
      this.total = response.pagination.total;
    });
  }


  // tslint:disable-next-line:typedef
  pageChanged(page) {
    this.page = page;
    const queryParams: Params = {page};
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams
      }
    );
    this.getData(this.page);
  }

}
