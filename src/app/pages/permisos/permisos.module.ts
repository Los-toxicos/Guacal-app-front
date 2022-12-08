import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermisosRoutingModule } from './permisos-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';


@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent
  ],
  imports: [
    CommonModule,
    PermisosRoutingModule
  ]
})
export class PermisosModule { }
