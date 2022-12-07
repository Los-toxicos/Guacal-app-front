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

  updateMenuRole(id): void {
    let nameMenuItems: String[];

    if (this.isLogged) {
      if (id == environment.ID_ROL_ADMIN) {
        nameMenuItems = ["Login", "IoT Dashboard", "Usuarios", "Roles", "Auth"];
      } else {
        nameMenuItems = ["Login", "E-commerce", "Usuarios", "Roles", "Auth"];
      }
    } else {
      nameMenuItems = []
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
