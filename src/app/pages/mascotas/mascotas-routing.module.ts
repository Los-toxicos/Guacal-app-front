import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { UsuarioAdminGuard } from '../../guardianes/usuarioAdmin.guard';

const routes: Routes = [
  {
    path: 'listar',
    canActivate: [UsuarioAdminGuard],
    component: ListarComponent
  },
  {
    path: 'crear', 
    canActivate: [UsuarioAdminGuard],  
    component: CrearComponent
  },
  {
    path: 'actualizar/:id',
    canActivate: [UsuarioAdminGuard],
    component: CrearComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MascotasRoutingModule { }
