import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionGuard } from '../../guardianes/autenticacion.guard';
import { SinAutenticarGuard } from '../../guardianes/sin-autenticar.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { InvitadoComponent } from './invitado/invitado.component';

const routes: Routes = [
  {
    "path": "login",
    canActivate: [SinAutenticarGuard],
    "component": LoginComponent
  },
  {
    "path": "logout",
    canActivate: [AutenticacionGuard],
    "component": LogoutComponent
  },
  {
    "path": "invitado",    
    canActivate: [SinAutenticarGuard],
    "component": InvitadoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
