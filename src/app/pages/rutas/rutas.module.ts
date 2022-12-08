import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RutasRoutingModule } from './rutas-routing.module';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';


@NgModule({
  declarations: [
    CrearComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    RutasRoutingModule
  ]
})
export class RutasModule { }
