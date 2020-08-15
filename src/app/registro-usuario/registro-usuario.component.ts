import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import { DataApiService } from '../services/data-api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})


export class RegistroUsuarioComponent implements OnInit {

  // variables
  form: FormGroup;
  loading: boolean;
  errors: boolean;


  constructor( fb: FormBuilder, private apiService: DataApiService) {
    this.form = fb.group({
      name: [
        '',
        Validators.required,
      ],
      email: [
        '',
        [Validators.required, Validators.email]
      ],
      password: [
        '',
        Validators.required
      ],
      password_confirmation: [
        '',
        Validators.required
      ]
    });
  }


  ngOnInit(): void {}


  registerUser(): void {
    this.loading = true;
    this.errors = false;

    // tslint:disable-next-line:max-line-length
    this.apiService.registrar_usuario(
      this.controls.name.value,
      this.controls.email.value,
      this.controls.password.value,
      this.controls.password_confirmation.value
    ).subscribe((res: any) => {
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
