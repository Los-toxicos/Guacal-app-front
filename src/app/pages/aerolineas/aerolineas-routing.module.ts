import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { UsuarioAdminGuard } from '../../guardianes/usuarioAdmin.guard'; 
import { AdministradorGuard } from '../../guardianes/administrador.guard'; 


const routes: Routes = [
  {
    path: 'listar',    
    component: ListarComponent
  },
  {
    path: 'crear',    
    canActivate: [AdministradorGuard],
    component: CrearComponent
  },
  {
    path: 'actualizar/:id',
    canActivate: [AdministradorGuard],
    component: CrearComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AerolineasRoutingModule { }
