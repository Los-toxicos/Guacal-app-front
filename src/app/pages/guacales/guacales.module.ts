import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuacalesRoutingModule } from './guacales-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';


@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent
  ],
  imports: [
    CommonModule,
    GuacalesRoutingModule
  ]
})
export class GuacalesModule { }
