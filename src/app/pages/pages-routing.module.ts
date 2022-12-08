import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { AutenticacionGuard } from '../guardianes/autenticacion.guard';
import { SinAutenticarGuard } from '../guardianes/sin-autenticar.guard';
import { GuacalesModule } from './guacales/guacales.module';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'aerolineas',
      /* canActivate: [AutenticacionGuard], */
      loadChildren: () => import('./aerolineas/aerolineas.module')
        .then(m => m.AerolineasModule),
    }, 
    {
      path: 'guacales',
      /* canActivate: [AutenticacionGuard], */
      loadChildren: () => import('./guacales/guacales.module')
        .then(m => m.GuacalesModule),
    }, 
    {
      path: 'mascotas',
      /* canActivate: [AutenticacionGuard], */
      loadChildren: () => import('./mascotas/mascotas.module')
        .then(m => m.MascotasModule),
    }, 
    {
      path: 'perfiles',
      /* canActivate: [AutenticacionGuard], */
      loadChildren: () => import('./perfiles/perfiles.module')
        .then(m => m.PerfilesModule),
    }, 
    {
      path: 'permisos',
      /* canActivate: [AutenticacionGuard], */
      loadChildren: () => import('./permisos/permisos.module')
        .then(m => m.PermisosModule),
    },
    {
      path: 'roles',
      loadChildren: () => import('./roles/roles.module')
        .then(m => m.RolesModule),
    }, 
    {
      path: 'rutas',
      /* canActivate: [AutenticacionGuard], */
      loadChildren: () => import('./rutas/rutas.module')
        .then(m => m.RutasModule),
    }, 
    {
      path: 'usuarios',
      /* canActivate: [AutenticacionGuard], */
      loadChildren: () => import('./usuarios/usuarios.module')
        .then(m => m.UsuariosModule),
    }, 
    {
      path: 'veterinarios',
      /* canActivate: [AutenticacionGuard], */
      loadChildren: () => import('./veterinarios/veterinarios.module')
        .then(m => m.VeterinariosModule),
    },
    {
      path: 'vuelos',
      /* canActivate: [AutenticacionGuard], */
      loadChildren: () => import('./vuelos/vuelos.module')
        .then(m => m.VuelosModule),
    },
    {
      path: 'seguridad',
      loadChildren: () => import('./seguridad/seguridad.module')
        .then(m => m.SeguridadModule),
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
