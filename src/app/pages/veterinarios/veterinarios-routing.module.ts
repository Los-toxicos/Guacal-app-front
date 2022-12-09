import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { OperadorAdminGuard } from '../../guardianes/operadorAdmin.guard';

const routes: Routes = [
  {
    path: 'listar',
    canActivate: [OperadorAdminGuard],
    component: ListarComponent
  },
  {
    path: 'crear',  
    canActivate: [OperadorAdminGuard],  
    component: CrearComponent
  },
  {
    path: 'actualizar/:id',
    canActivate: [OperadorAdminGuard],
    component: CrearComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeterinariosRoutingModule { }
