import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadService } from '../services/seguridad.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioAdminGuard implements CanActivate {
  constructor(private miServicioSeguridad: SeguridadService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.miServicioSeguridad.sesionExiste() && (this.miServicioSeguridad.VerificarRolSesion(environment.ID_ROL_USER) ||
      this.miServicioSeguridad.VerificarRolSesion(environment.ID_ROL_ADMIN))) {
      return true;
    }
    this.router.navigate(['pages/seguridad/login']);
    return false;
  }
}


