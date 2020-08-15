import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JwtHelperService } from '../services/jwt-helper.service';
import { DataApiService } from '../services/data-api.service';


@Component({
  selector: 'app-nuevo-ticket',
  templateUrl: './nuevo-ticket.component.html',
  styleUrls: ['./nuevo-ticket.component.css']
})
export class NuevoTicketComponent implements OnInit {

  // variables
  form: FormGroup;
  loading: boolean;
  errors: boolean;
  accessTokenDetails: any;

  constructor(
    fb: FormBuilder,
    jwtHelper: JwtHelperService,
    private apiService: DataApiService
  ) {
    this.form = fb.group({
      asunto: [
        '',
        Validators.required
      ],
      descripcion: [
        '',
        Validators.required
      ],
      file: [
        '',
        Validators.required
      ],
    });


    this.accessTokenDetails = {
      id: jwtHelper.id(),
    };
  }

  ngOnInit(): void {}

  save_ticket(): void {
    this.loading = true;
    this.errors = false;
    // tslint:disable-next-line:max-line-length
    this.apiService.guardar_ticket(this.accessTokenDetails.id, this.controls.asunto.value, this.controls.descripcion.value, this.controls.file.value)
      .subscribe((res: any) => {
        console.log(res);
        this.loading = false;
      }, (err: any) => {
        console.log(err);
        this.loading = false;
        this.errors = true;
      });
  }


  /**
   * Getter for the form controls
   */
  // tslint:disable-next-line:typedef
  get controls() {
    return this.form.controls;
  }
}
