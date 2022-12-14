import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NbCardModule } from '@nebular/theme';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { InvitadoComponent } from './invitado/invitado.component';



@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    InvitadoComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    NbCardModule,
    FormsModule
  ]
})
export class SeguridadModule { }
