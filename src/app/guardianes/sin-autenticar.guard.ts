import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadService } from '../services/seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class SinAutenticarGuard implements CanActivate {
  constructor(private miServicioSeguridad: SeguridadService, private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.miServicioSeguridad.sesionExiste()){
        this.router.navigate(['pages/dashboard']);
        return false;        
      } else {        
        return true;
      }
  }
  
}
