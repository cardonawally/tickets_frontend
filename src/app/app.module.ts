import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

import { TicketsComponent } from './tickets/tickets.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { VerTicketComponent } from './ver-ticket/ver-ticket.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    TicketsComponent,
    HeaderComponent,
    TicketsComponent,
    VerTicketComponent,
    RegistroUsuarioComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgxPaginationModule,
        ReactiveFormsModule
    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
