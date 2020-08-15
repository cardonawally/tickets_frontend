import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {GuestGuardService} from '../services/guest-guard.service';
import {ReactiveFormsModule} from '@angular/forms';
import {VerTicketComponent} from './ver-ticket.component';

const routes: Routes = [
  {
    path: '',
    component: VerTicketComponent,
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
export class VerTicketModule { }
