import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AerolineasRoutingModule } from './aerolineas-routing.module';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';


@NgModule({
  declarations: [
    CrearComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    AerolineasRoutingModule
  ]
})
export class AerolineasModule { }
