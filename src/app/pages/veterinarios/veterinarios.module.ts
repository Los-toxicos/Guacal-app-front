import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeterinariosRoutingModule } from './veterinarios-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    
  ],
  imports: [
    CommonModule,
    VeterinariosRoutingModule,
    FormsModule
  ]
})
export class VeterinariosModule { }
