import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {GuestGuardService} from '../services/guest-guard.service';
import {ReactiveFormsModule} from '@angular/forms';
import {TicketsComponent} from './tickets.component';
import {VerTicketComponent} from '../ver-ticket/ver-ticket.component';

const routes: Routes = [
  {
    path: '',
    component: TicketsComponent,
    canActivate: [ GuestGuardService ],
    children: [
      {
        path: '/ver/{id}',
        component: VerTicketComponent
      }
    ]
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
export class TicketsModule { }
