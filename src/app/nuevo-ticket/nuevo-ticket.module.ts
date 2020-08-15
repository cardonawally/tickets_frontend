import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NuevoTicketComponent} from './nuevo-ticket.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthGuardService} from '../services/auth-guard.service';
const routes: Routes = [
  {
    path: '',
    component: NuevoTicketComponent,
    canActivate: [ AuthGuardService ]
  }
];


@NgModule({
  declarations: [NuevoTicketComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class NuevoTicketModule { }
