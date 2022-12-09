import { Component } from '@angular/core';
import { SeguridadService } from '../services/seguridad.service';

import { MENU_ITEMS } from './pages-menu';
import { Subscription } from 'rxjs';
import { environment } from '../../environments/environment';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  menu = new Array();
  subscription: Subscription;
  isLogged: boolean = false;

  constructor(private miServicioSeguridad: SeguridadService) { }

  ngOnInit() {
    this.subscription = this.miServicioSeguridad.getUsuario().subscribe(data => {
      this.isLogged = true;
      this.updateMenuRole(data.id_rol);
    });
  }

  updateMenuRole(rol): void {
    let nameMenuItems: String[];

    if (this.isLogged) {
      let id = rol.id

      if (id == environment.ID_ROL_ADMIN) {
        nameMenuItems = ["Administrador", "Login", "Home", "Aerolineas", "Guacales", "Mascotas", "Perfiles", "Permisos", "Roles", "Rutas", "Usuarios", "Veterinarios", "Vuelos"];
      } else if (id == environment.ID_ROL_AIRLINE_OPERATOR) {
        nameMenuItems = ["Operador de Aerolinea", "Login", "Home", "Guacales", "Rutas", "Veterinarios", "Vuelos"];
      } else if (id == environment.ID_ROL_USER) {
        nameMenuItems = ["Usuario", "Login", "Home", "Aerolineas", "Mascotas", "Rutas", "Vuelos", "Veterinarios"];
      } else if (id == environment.ID_ROL_GUEST) {
        nameMenuItems = ["Invitado", "Login", "Home", "Aerolineas", "Rutas", "Veterinarios"];
      } else {
        nameMenuItems = ["Login", "Home", "Aerolineas", "Rutas", "Veterinarios"];
        console.log("No se encontro el rol");

      }
    } else {
      nameMenuItems = ["Login", "Home", "Aerolineas", "Rutas", "Veterinarios"]
      console.log("No está logueado");

    }
    MENU_ITEMS.forEach(actualNameMenuItem => {
      if (nameMenuItems.indexOf(actualNameMenuItem.title) != -1) {
        this.menu.push(actualNameMenuItem);
      }
    });
  }

  getItemsMenuRole(menuItems): String[] {
    let items: String[] = []
    if (this.isLogged) {
      menuItems.forEach(itemActual => {
        items.push(itemActual.url);
      });
    }

    return items;
  }
}
