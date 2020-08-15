import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {GuestGuardService} from '../services/guest-guard.service';
import {RegistroUsuarioComponent} from './registro-usuario.component';
import {ReactiveFormsModule} from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: RegistroUsuarioComponent,
    canActivate: [ GuestGuardService ]
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class RegistroUsuarioModule { }
