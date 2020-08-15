import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerTicketComponent} from './ver-ticket/ver-ticket.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'registro_usuario',
    loadChildren: () => import('./registro-usuario/registro-usuario.module').then(m => m.RegistroUsuarioModule),
  },
  {
    path: 'tickets',
    loadChildren: () => import('./tickets/tickets.module').then(m => m.TicketsModule),
  },
  {
    path: 'nuevo_ticket',
    loadChildren: () => import('./nuevo-ticket/nuevo-ticket.module').then(m => m.NuevoTicketModule),
  },
  {
    path: 'registro_usuario',
    loadChildren: () => import('./registro-usuario/registro-usuario.module').then(m => m.RegistroUsuarioModule),
  },
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
